/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// short answer

var merge = function(nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};

// fast and optimize answer

var merge = function(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  
  for(i = nums1.length - 1; i >= 0; i--){
      if(right < 0){
         break
         };
      if(left >= 0 && nums1[left] > nums2[right]){
          nums1[i] = nums1[left--];
      }else{
          nums1[i] = nums2[right--];
      }
  }
};
