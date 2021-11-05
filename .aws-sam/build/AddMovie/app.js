// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

const dynamoManager = require("./managers/dynamoManager");
const dataManager = require("./managers/dataManager");

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
exports.addMovie = async (event, context) => {
  try {
    const movieDetailsJson = JSON.parse(event.body);
    const movieDetailsPoco = dataManager.createMoviePoco(movieDetailsJson);
    const result = await dynamoManager.saveMovie(movieDetailsPoco);

    response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

exports.getMovie = async (event, context) => {
  try {
    const movieId = event.queryStringParameters.movieId;
    const movieData = await dynamoManager.getMovie(movieId);

    response = {
      statusCode: 200,
      body: JSON.stringify(movieData),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
