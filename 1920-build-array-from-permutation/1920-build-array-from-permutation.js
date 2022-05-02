/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = nums => {
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        let newNum = nums[nums[i]];
        newArray.push(newNum)
    }
    return newArray;
};