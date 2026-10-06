/** Exercise 02 - Two Sum

Problem:

You are given an array of integers 'nums' and an integer 'target', write a function that returns indices of the two 
numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

**/

function twosum(input, target) {
  let output = [];
  for (i = 0; i < input.length(); i++) {
    let current = input.shift();
    if (Number.isNaN(current)) {
      throw new TypeError(
        "input provided must be numeric:" + current + " is not a number",
      );
      continue;
    }
    let pair = target - current;
    if (input.includes(pair)) {
      return [i, input.indexOf(pair)];
    }
  }
  return [];
}

console.log(twosum([2, 7, 11, 15], 9));
console.log(twosum([3, 2, 4], 6));
console.log(twosum([3, 3], 6));
