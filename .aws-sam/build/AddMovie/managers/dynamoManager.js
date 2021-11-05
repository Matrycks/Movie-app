import { AWS } from "aws-sdk";
let dynamoClient = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

export async function saveMovie(movieData) {
  const params = {
    TableName: TableName,
    Item: movieData,
  };

  await dynamoClient.put(params).promise();
  return movieData;
}
