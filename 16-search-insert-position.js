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


// recursive method, its calling the function that i created again and using it inside the function
function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
	 // If the target is less then the very last item then insert it at that item index
	 // because anything index less then that has already been confirmed to be less then the target.
	 // Otherwise insert it at that item index + 1
	 // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);
    
	// found target
    if (array[midPoint] === target) return midPoint;
    
	// search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}