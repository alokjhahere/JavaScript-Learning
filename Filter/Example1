// Given arr =[5,1,3,6,4] return an array of odd numbers.

const arr = [5,1,3,6,4];
function isOdd(x){
    return x%2;
}
console.log(arr.filter(isOdd));

//chaining of map, filter 

console.log(arr.filter(isOdd).map(()=>1)); // to get [1,1,1]
console.log(arr.map(isOdd).filter(()=>1)); // you will get [1,1,1,0,0]
console.log(arr.map(isOdd).filter(x=>x)); //to get [1,1,1] again

