#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { UdemyAwsCdkStack } from '../lib/udemy-aws-cdk-stack';

const app = new cdk.App();
new UdemyAwsCdkStack(app, 'UdemyAwsCdkStack', {});
new UdemyAwsCdkStack(app, 'FoysalStack', {});