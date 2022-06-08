/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //define if there is no prefix it will output empty string
    "use strict";
    if(strs === undefined || strs.length === 0){ return "";}
    
    //checking the every letter if prefix same or not
    
    return strs.reduce((prev,next) => {
        let i = 0;
        while(prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    })
};


//FASTER SOLUTION ==>

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);

  const shortStr = strs[0];
  let isPrefix = true;
  let result = '';

  for (let i = 0; i < shortStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      isPrefix = isPrefix && shortStr[i] === strs[j][i];
    }
    if (!isPrefix) return result;
    result += shortStr[i];
  }
  return result;
};
