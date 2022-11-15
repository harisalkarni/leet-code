/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    const hashMap = { '(' : ')', '{' : '}', '[' : ']'}; // create a hashmap to check every bracket
    const stack = []; // if the bracket didnt have the match push it to an empty array
    
    for (let ch of s){
        if(hashMap[ch]){
            // if ch is opening bracket then push a closing bracket to complete it to the stack empty array then continue iterate
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length -1] === ch){
            // if ch found the closing bracket, pop the closing bracket that already in the stack array
            stack.pop()
        }else {
            // anything than that is return false
            return false
        }
    }
    return stack.length === 0; //check if the stack length is empty or not and return boolean value
    
};