const { fidlerPhrases } = require("../../phrases");
const { generateLoremFidsum } = require("../../generate-lorem-fidsum");
const { generateFidlerText } = require("../../generate-fidler-text");

exports.handler = async function (event) {
  const paragraphs = event.queryStringParameters.paragraphs;

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow any origin to access the resource
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: generateFidlerText(
        generateLoremFidsum(fidlerPhrases, paragraphs)
      ),
    }),
  };
};
