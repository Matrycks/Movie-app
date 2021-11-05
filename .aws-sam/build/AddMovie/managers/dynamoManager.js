"use strict";

var DynamoDB = require("aws-sdk/clients/dynamodb");
let dynamoClient = new DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

module.exports.saveMovie = async (movieData) => {
  const params = {
    TableName: TableName,
    Item: movieData,
  };

  return dynamoClient
    .put(params)
    .promise()
    .then(() => {
      return item;
    });
};

module.exports.getMovie = async (movieId) => {
  const params = {
    Key: {
      movieId: movieId,
    },
    TableName: TableName,
  };
  return dynamoClient
    .get(params)
    .promise()
    .then((result) => {
      console.log(result);
      return result.Item;
    });
};
