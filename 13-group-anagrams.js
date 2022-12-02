/*
brute force method: 
setiap string di array -> O(N)
    compare sama other string -> )(N)
    apakah anagram?
    kalo iya, masukin ke list
    
    time complexity: (O(N) * O(N)) * M   // M = panjang dari string
    
    
Hash Map Method: 
setiap string di array 
    bikin key hashmap
    check ada di hashmap?
    add ke hashmap  
    // ada 2 cara untuk bikin hashmap nya
    // cara pertama = dari string yang ada di array bikin hashmap nya
    ex: ["eat", "ate", "tea"] hashmapnya adalah = aet, aet, aet
    
    time complexity cara 1 : O(N * M log M)
    
    // cara ke dua = bikin hashmap nya dari setiap huruf, jadi total ada 26 huruf
    ex: {
    a -> 1
    b -> 0
    c -> 0
    ..
    e -> 1
    ...
    t -> 1
    ..
    z -> 0
    }
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {

    const anagramMap = {} //bikin hashmap kosong
    
    strs.forEach( str => {                    // untuk masukin huruf di string nya ke hashmap
        const key = str.split('').sort().join('');
        const arr = anagramMap[key] ?? []; 
        
        arr.push(str) // setelah itu push huruf nya ke object anagramMap
        
        anagramMap[key] = arr;
    })
    
    const result = [];  //bikin array kosong buat store result nya
    
    Object.values(anagramMap).forEach(val => {
        result.push(val);  //untuk semua object huruf di anagramMap array, push hurufnya ke dalam result array
    })
    
    return result; //panggil lagi result untuk munculin list text nya
 }


 //brute force method

 var groupAnagrams = function(strs) {

    let obj = {};

    for(let str of strs){
        let word = str.split('').sort().join('');
        obj[word] ? obj[word].push(str) : obj[word] = [str];
    }

    return Object.values(obj)

 };