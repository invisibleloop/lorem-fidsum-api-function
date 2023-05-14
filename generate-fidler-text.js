/**
 * Turns the array of phrases into a string
 * @param {Array} text
 * The array of fidler phrases
 * @returns String
 */
module.exports.generateFidlerText = (text) => {
  let formattedText = "";
  text.forEach((para) => {
    formattedText += `${para.p}\n\n`;
  });
  return formattedText;
};
