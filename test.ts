const fs = require("fs");

const data = [];

const allFileContents = fs.readFileSync("proposals.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  const arr = line.split(/\s+/);

  const projectItem = {};
  arr.forEach((item, index) => {
    let projectStatus =
      item === "COMPLETED" && index === 1 ? "complete" : "inProgress";
    index === 0
      ? (projectItem.projectId = item)
      : index === 1
      ? (projectItem.projectStatus = projectStatus)
      : null;
    data.push(projectItem);
  });
});

console.log(data);
