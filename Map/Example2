// arr = [5,1,3,2] convert this in binary.

const arr = [5,1,3,2];

const binary = function(arr){
    return arr.toString(2);
};

//Using Directly the map method.
console.log(arr.map(binary));

//Implementing Map or Without using the map function directly
const convertInBinary = function(arr, logic){
    const output= [];
    for(let i= 0; i< arr.length; i++){
        output.push(logic(arr[i]));
    }

    return output;
}
console.log(convertInBinary(arr, binary));

