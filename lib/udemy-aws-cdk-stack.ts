import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class UdemyAwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'someBucket',{
      lifecycleRules:[{
        expiration:Duration.days(5)
      }]
    })
  }
}
