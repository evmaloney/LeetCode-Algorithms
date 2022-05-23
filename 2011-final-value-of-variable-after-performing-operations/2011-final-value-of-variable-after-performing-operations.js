/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = operations => {
  let X = 0;
  operations.forEach(operation => {
    operation === "X++" || operation === "++X" ? X++ : X--;
  });
  return X;
};