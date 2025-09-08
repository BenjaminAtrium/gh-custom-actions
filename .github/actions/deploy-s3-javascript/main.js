const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

const run = () => {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files
  const s3Uri = `s3://${bucket}`;
  // note: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables are needed to use AWS cli command below
  // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  core.notice(`use "aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}" to upload files on AWS S3 bucket`);
};

run();
