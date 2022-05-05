/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    let sumPrevNums = 0
    return nums.map(num => {
        let currentNum = num;
        num += sumPrevNums;
        sumPrevNums += currentNum;
        return num;
    });
}