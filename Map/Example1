// If an Array of Radii is Given, radius =[3,1,2,4] and You have to ruturn an array of areas, circumference and diameter. How will you do it? 
// #1. The Good Way

const radius =[3,1,2,4]

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return Math.PI*2*radius;
}

const diameter = function(radius){
    return 2*radius;
}


//using directly the map function
const calculateArea = radius.map(area);  
console.log(calculateArea);

const calculateCircumference = radius.map(circumference);
console.log(calculateCircumference);

const calculateDiameter = radius.map(diameter);  
console.log(calculateDiameter);


//without using the map function directly, the functional programming way, the implementation of map basically.
const calculate = function(radius, logic){
    const output =[];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    };
    return output;
}

 console.log(calculate(radius, area));
 console.log(calculate(radius, circumference));
 console.log(calculate(radius, diameter));
