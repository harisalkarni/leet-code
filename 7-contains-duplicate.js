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


//faster solution

var containsDuplicate = function(nums) {
    var obj = {}
    
    for(i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > 1) return true;
    }
    return false;
}

//more faster and easy to understand
var containsDuplicate = function(nums){
    const set = new Set();
    
    for(i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
}
