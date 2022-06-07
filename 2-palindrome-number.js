/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 == 0)) //stating that if the number is negative or after remainder is zero or not equal zero it all false
        return false;
    
    let reverse = 0; // state the number is zero
    
    while(x > reverse) {
        reverse = reverse *10 + x % 10;
        x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(reverse/10);
};


// EASY TO UNDERSTAND ANSWER

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
	
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    // compare the value regardless of types
    return x == reverse;
};
