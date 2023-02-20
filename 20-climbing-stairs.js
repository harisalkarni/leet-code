/**
 * @param {number} n
 * @return {number}
 */

// time complexity is O(n) where n is the number of stairs
// space complexity is also O(n) because we need to store the previous result as reference for the next
// like fibonacci sequence
// the next step result is = 2 hasil akhir yang ditambahkan

var climbStairs = function(n) {
    if(n == 0 || n == 1) return 1;

    let first = 1
    let second = 2

    for(i = 3; i <= n; i++){
        let third = first + second;
        first = second
        second = third
    }

    return second
};