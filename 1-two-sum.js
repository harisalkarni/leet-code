var twoSum = function(nums, target) {
    for(let i =0;i<nums.length;i++){
    
    
       for(let j = i+1;j<nums.length;j++){
        
        
            if(nums[i] + nums[j] === target) return [i , j];
            
        
       };
    };
};


//FASTER SOLUTION AND EASY TO UNDERSTAND

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};


// EXPLANATION
