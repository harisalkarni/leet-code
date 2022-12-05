/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {

    //iteration method

    for(i = 0; i < s.length; i++){
        let char = s[i];

        if(s.indexOf(char) === s.lastIndexOf(char))
        return i;
    }

    return -1;

 };


 /**
 * @param {string} s
 * @return {number}
 */
  var firstUniqChar = function(s) {

    //hashmap method

    let map = {};

    for(let char of s){
        map[char] ? map[char]++ : map[char] = 1;
    }

    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === 1) return  i;
    }

    return -1;

  }
    