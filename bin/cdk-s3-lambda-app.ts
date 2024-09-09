#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkS3LambdaAppStack } from '../lib/cdk-s3-lambda-app-stack';
// import { testEnv } from '../config/test-env';
// import { prodEnv } from '../config/prod-env';
import * as fs from 'fs';
import * as path from 'path';

// Get the current environment from CDK context
const app = new cdk.App();
const environment = app.node.tryGetContext('env') || 'test';

// Load configuration specific to the environment
const configFilePath = path.join(__dirname, `../config/config-${environment}.json`);
const config = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));

// Deploy the stack with environment-specific configuration
new CdkS3LambdaAppStack(app, `MyS3LambdaStack-${environment}`, {
  sourceBucketName: config.sourceBucketName,
  destinationBucketName: config.destinationBucketName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
