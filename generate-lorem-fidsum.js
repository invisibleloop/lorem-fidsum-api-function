const { howManyWords } = require("./how-many-words");
const { pickRandomPhrase } = require("./pick-random-phrase");

/**
 * Generate the lorem Fidsum text
 * @param  {Array} phrases
 *  Array of Fidler Phrases
 * @param  {Number} count
 *  How many paragraphs to generate
 * @return {Array}
 *  Array of lorem fidsum paragraphs
 */
module.exports.generateLoremFidsum = (phrases, count) => {
  let phrasesData = phrases; // the phrases to choose from
  const maxParagraphs = count; // number of paragraphs to generate
  const maxWords = 100; // max word length of the paragraphs
  let phrasesCount = phrasesData.length - 1; // length of the phrases array
  const paragraph = []; // array to push paragraphs to
  let newPhrase = ""; // concatonated string of phrases
  let phraseBank = []; // array of picked phrases

  for (let x = 0; x < maxParagraphs; x += 1) {
    // paragraph object
    paragraph[x] = {
      id: x,
      p: [],
    };

    let wordCount = 0; // keep count of the paragraph words
    for (let y = 0; y <= phrasesCount; y += 1) {
      // make sure wordcount doesn't exceed the max
      if (wordCount <= maxWords) {
        // if the phrases are depleted then reset
        if (phrasesData.length === 1) {
          phrasesData = phraseBank;
          phraseBank = [];
          phrasesCount = phrasesData.length - 1;
        }
        // the next random phrase
        const randomPhrase = pickRandomPhrase(phrasesData, phrasesCount);
        // push phrase to the bank
        phraseBank.push(randomPhrase);
        newPhrase = randomPhrase;
        // remove phrase for original list
        phrasesData = phrasesData.filter((item) => item !== randomPhrase);
        // reduce array count
        phrasesCount -= 1;
        // if it's the first phrase add a prefix
        if (x === 0 && y === 0) {
          newPhrase = `Lorem Fidsum, ${
            newPhrase.charAt(0).toLowerCase() + newPhrase.slice(1)
          }`;
        }
        // push phrase to the current  paragraph
        paragraph[x].p.push(newPhrase);
        // increase the word count
        wordCount += howManyWords(newPhrase);
      } else {
        // word count exceeded
        wordCount = 0;
        // push completed paragraph to array
        paragraph[x].p = paragraph[x].p.join(" ");
        break;
      }
    }
  }
  return paragraph;
};
