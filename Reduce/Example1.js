// Given arr = [5,1,3,2,6] Find Sum.
//without using reduce method.
const arr = [5,1,3,2,6];
function findSum(arr){
         let sum = 0;
         for(let i= 0; i<arr.length; i++){
            sum = sum + arr[i];
         }

         return sum;
}

console.log(findSum(arr));

//implementing this logic in reduce function.

const output = arr.reduce(function(acc, curr){
   acc = acc+curr;
   return acc;
},0);

console.log(output);

//find the maximum element of the array.
//without using the reduce method.

function findMax(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
       };
    return max;
};

console.log(findMax(arr));

//implementing using reduce method.

const output2 = arr.reduce(function(acc, curr){
    if(curr>acc){
        acc = curr;
    }
    return acc;
},0);

console.log(output2);





