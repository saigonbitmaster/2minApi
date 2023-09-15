"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalTransform = exports.proposerTransform = exports.challengeTransform = exports.fundTransform = exports.getSheetData = void 0;
const fs_1 = require("fs");
const path = require("path");
const process = require("process");
const local_auth_1 = require("@google-cloud/local-auth");
const googleapis_1 = require("googleapis");
const moment = require("moment");
const lodash = require("lodash");
const mongoose_1 = require("mongoose");
const validateEmail_1 = require("./validateEmail");
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'src/flatworks/utils/token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'src/flatworks/utils/credentials.json');
const loadCredential = async () => {
    try {
        const content = (await fs_1.promises.readFile(TOKEN_PATH));
        const credentials = JSON.parse(content);
        return googleapis_1.google.auth.fromJSON(credentials);
    }
    catch (err) {
        return null;
    }
};
const saveCredential = async (client) => {
    const content = (await fs_1.promises.readFile(CREDENTIALS_PATH));
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs_1.promises.writeFile(TOKEN_PATH, payload);
};
const authorize = async () => {
    let client = (await loadCredential());
    if (client) {
        return client;
    }
    client = await (0, local_auth_1.authenticate)({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredential(client);
    }
    return client;
};
const getSheetData = async (sheetUrl, sheetName, range) => {
    const spreadsheetId = sheetUrl.includes('https://docs.google.com/spreadsheets')
        ? sheetUrl.split('https://docs.google.com/spreadsheets/d')[1].split('/')[1]
        : sheetUrl;
    const auth = await authorize();
    const sheets = googleapis_1.google.sheets({ version: 'v4', auth });
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!${range}`,
    });
    return res.data.values;
};
exports.getSheetData = getSheetData;
const fundTransform = (data) => {
    const filteredData = data
        .filter((item) => item[0])
        .map((item) => item.map((item) => item.trim()));
    return filteredData.map((item) => {
        const record = {};
        record.name = item[0];
        record.description = item[4];
        record.currency =
            item[2] && ['usd', 'ada'].includes(item[2]) ? item[2] : 'usd';
        record.budget =
            item[1] && parseInt(item[1]) ? parseInt(item[1]) : 0;
        record.date = moment(item[3], 'MM-DD-YYYY').isValid()
            ? moment(item[3], 'MM-DD-YYYY').toDate()
            : moment().toDate();
        return lodash.omitBy(record, lodash.isNil);
    });
};
exports.fundTransform = fundTransform;
const proposerTransform = (data) => {
    const filteredData = data
        .filter((item) => item[0] && item[1] && (0, validateEmail_1.validateEmail)(item[1]))
        .map((item) => item.map((item) => item.trim()));
    return filteredData.map((item) => {
        const record = {};
        [
            record.fullName,
            record.email,
            record.telegram,
            record.walletAddress,
            record.description,
        ] = item;
        return lodash.omitBy(record, lodash.isNil);
    });
};
exports.proposerTransform = proposerTransform;
const challengeTransform = async (data, fundService) => {
    const filteredData = data
        .filter((item) => item[0] && item[1])
        .map((item) => item.map((item) => item.trim()));
    return await Promise.all(filteredData.map(async (item) => {
        const record = {};
        const nullFundId = new mongoose_1.Types.ObjectId().toString();
        record.name = item[0];
        record.fundId = lodash.get(await fundService.findByName(item[1]), '_id', nullFundId);
        record.description = item[3];
        record.budget =
            item[2] && parseInt(item[2])
                ? parseInt(item[2])
                : 0;
        return lodash.omitBy(record, lodash.isNil);
    }));
};
exports.challengeTransform = challengeTransform;
const proposalTransform = async (data, fundService, challengeService, proposerService) => {
    const filteredData = data
        .filter((item) => item[0] && item[1] && item[2] && item[3] && item[4])
        .map((item) => item.map((item) => item.trim()));
    return await Promise.all(filteredData.map(async (item) => {
        const record = {};
        const nullId = new mongoose_1.Types.ObjectId().toString();
        let fundName, proposerName, challengeName, requestedBudgetStr, startDateStr, completeDateStr;
        [
            record.projectId,
            record.name,
            fundName,
            challengeName,
            proposerName,
            requestedBudgetStr,
            record.projectStatus,
            record.proposalUrl,
            record.walletAddress,
            record.smartContract,
            record.previousProposals,
            startDateStr,
            completeDateStr,
            record.description,
        ] = item;
        record.fundId = lodash.get(await fundService.findByName(fundName), '_id', nullId);
        record.challengeId = lodash.get(await challengeService.findByName(record.fundId, challengeName), '_id', nullId);
        record.proposerId = lodash.get(await proposerService.findByName(proposerName), '_id', nullId);
        record.requestedBudget =
            requestedBudgetStr && parseInt(requestedBudgetStr)
                ? parseInt(requestedBudgetStr)
                : 0;
        record.startDate = moment(startDateStr, 'MM-DD-YYYY').isValid()
            ? moment(startDateStr, 'MM-DD-YYYY').toDate()
            : moment().toDate();
        record.completeDate = moment(completeDateStr, 'MM-DD-YYYY').isValid()
            ? moment(completeDateStr, 'MM-DD-YYYY').toDate()
            : moment().toDate();
        return lodash.omitBy(record, lodash.isNil);
    }));
};
exports.proposalTransform = proposalTransform;
//# sourceMappingURL=googleSheet.js.map