/*
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

//let myCreatedDate = new Date(2023,1,23)
//let myCreatedDate = new Date(2023,1,23,5,3)
let myCreatedDate = new Date("02-05-2024")
console.log(myCreatedDate.toLocaleString());
*/
let myTimeStack = Date.now();
let myCreatedDate = new Date("02-05-2024");
//console.log(myTimeStack);
//console.log(myCreatedDate.getSeconds());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//console.log(newDate.getFullYear()+1);

newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(newDate);
