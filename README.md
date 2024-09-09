# Welcome to your CDK TypeScript project

# Steps to run this project:
1. Checkout master branch
2. Modify bucket names in config/config-prod.json and config/config-test.json
3. cdk deploy --context env=test or cdk deploy --context env=test
4. Create any file: vi file2.txt 
5. aws s3 cp file2.txt s3://<your-source-bucket-name-given-in-step2>/
6. aws s3 ls s3://<your-dest-bucket-name-given-in-step2> 


