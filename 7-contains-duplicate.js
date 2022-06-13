/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;  // 1 line solution
};

// another 1 line solution
 var containsDuplicate = function(nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
};
