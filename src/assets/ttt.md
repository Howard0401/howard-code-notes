# Node js with AWS dynamoDB syntex

## How to import SDK? 
```js
const awsSDK = require('aws-sdk')

awsSDK.config.update({
  accessKeyId: process.env.YOUR_AWS_ID, // 你的aws id
  secretAccessKey: process.env.YOUR_AWS_SECRET_KEY, // 你的aws key
  region: process.env.YOUR_AWS_REGION, // 你的aws 區域
})

const documentClient = new awsSDK.DynamoDB.DocumentClient()
```

## Encapsulate async/await funtion for 