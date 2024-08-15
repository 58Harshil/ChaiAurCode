// array

const myArray =[0,1,2,3,4,5]
const myHeros = ["harshil","Karan"]
const myHeros2 = new Array(1,2,3,4,5)
//console.log(myArray[0]);

//method
/*
myArray.push(6)
myArray.push(7)
myArray.pop()
*/

//myArray.unshift(5)
//myArray.shift()

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(4));    
/*
const newarr = myArray.join()

console.log( myArray);
console.log( newarr);
*/

//slice and splice

console.log("a ",myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("b ",myArray);

const myn2 = myArray.splice(1,3)
console.log("c ",myArray);

console.log(myn2);
