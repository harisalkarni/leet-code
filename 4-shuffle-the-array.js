/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let a = []; // create empty string
    
    for (let i = 0 ; i < n; i++) {. //loop through array
        a.push(nums[i], nums[i+n]); // if the number is find push to new array
    }
    return a;
};
