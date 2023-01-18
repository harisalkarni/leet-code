function removeKElements(inputArray, N, K) {
    if(K > N){
        console.log('error: K cannot be greater than N');
        return;
    }
    if(K > inputArray.length){
        console.log('error: K cannot be greater than the length of the inputArray');
        return;
    }
    for(let i=0; i < K; i++){
        inputArray.splice(Math.floor(Math.random() * inputArray.length), 1)
    }
    return inputArray;
}


let inputArray = [3, 2, 1, 7, 5, 9, 4, 8, 6, 10];
let N = 10;
let K = 3;
let result = removeKElements(inputArray, N, K);
console.log(result); 