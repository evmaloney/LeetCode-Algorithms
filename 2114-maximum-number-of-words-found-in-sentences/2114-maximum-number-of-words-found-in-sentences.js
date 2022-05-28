/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
  let mostWords = 0;
  sentences.forEach(sentence => {
    const sentenceLength = sentence.split(" ").length;
    if (sentenceLength > mostWords) mostWords = sentenceLength;
  });
  return mostWords;
};