/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const numsCopy = [...nums];
    return nums.concat(numsCopy);
};