/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// iterate the array
// if target is equal with the iterate array return the index


var searchInsert = function(nums, target) {

    let i = 0; //define i as index to iterate the array

    while(nums[i] < target){  // as long as nums is smaller than target it will iterate to the next array list
        i++;
        if(nums[i] === target){   // if nums is equal target than stop the loop and return the index
            break;
        }
    }

    return i;

};


// 1 line code
var searchInsert = function(nums, target) {

    return nums.filter(x => x < target).length;

};

