// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

import dynamoManager from "./managers/dynamoManager";
import dataManager from "./managers/dataManager";

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export async function addMovie(event, context) {
  try {
    // const movieDetailsJson = JSON.parse(event.body);
    // const movieDetailsPoco = dataManager.createMoviePoco(movieDetailsJson);
    // const result = dynamoManager.saveMovie(movieDetailsPoco);

    response = {
      statusCode: 200,
      body: JSON.stringify({ movieId: "1", title: "Matrix" }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
}
