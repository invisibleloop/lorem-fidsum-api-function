/**
 * Pick a random phrase from the list
 * @param  {Array} phrases
 *  Array of Fidler Phrases
 * @param  {Number} count
 *  The index of the chosen item
 * @return {String}
 *  The random phrase
 */
module.exports.pickRandomPhrase = (phrases, count) =>
  phrases[Math.floor(Math.random() * count) + 1];
