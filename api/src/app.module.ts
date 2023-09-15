import { ProposalModule } from './proposal/module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProposerModule } from './proposer/module';
import { FundModule } from './fund/module';
import { ChallengeModule } from './challenge/module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.CONNECTION_STRING,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProposerModule,
    FundModule,
    ChallengeModule,
    ProposalModule,
  ],
})
export class AppModule {}
