/**
 * 
给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。
由于答案可能很大，因此 返回答案模 10^9 + 7 。
示例 1：

输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
示例 2：

输入：arr = [11,81,94,43,3]
输出：444
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let stack = [];
  let ans = 0;
  arr.push(0);
  const mod = 10 ** 9 + 7;
  for (let i = 0; i < arr.length; i++) {
    if (!stack.length) {
      stack.push(i);
      continue;
    }
    const top = arr[stack[stack.length - 1]];
    if (arr[i] >= top) stack.push(i);
    else {
      while (arr[i] < arr[stack[stack.length - 1]] && stack.length) {
        const newTop = stack.pop();
        let left;
        let right = i;
        if (!stack.length) {
          left = -1;
        } else {
          left = stack[stack.length - 1];
        }
        let range = (newTop - left) * (right - newTop);
        ans += range * arr[newTop];
      }
      stack.push(i);
    }
  }
  return ans % mod;
};
