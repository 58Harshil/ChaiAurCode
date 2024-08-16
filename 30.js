/*
const coding = [ "js", "css", "ruby","javascript","xml"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item
    
})
console.log(values);
*/
/*
const muNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = muNums.filter((num)=>{
    return num>4
})
*/ 
/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []
myNums.forEach((num) => {
    if(num >4){
        newNums.push(num)
        
    }
});
console.log(newNums);
*/
/*
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
//const newNu = myNumber.map((num)=>num+10)
const newNu = myNumber
                .map((num)=>num*10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40 )
console.log(newNu);
*/

const myNums = [1, 2, 3]/*
const myTotal = myNums.reduce(function(acc,current){
    console.log(`acc: ${acc} and current: ${current}`);
    
    return acc + current
}, 0)
*/

const myTotal = myNums.reduce((acc,current)=>acc+current,0)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 1999,
},
    {
        itemName: "Python Course",
        price: 400,
},
    {
        itemName: "c++ Course",
        price: 900,
},
    {
        itemName: "Node.js Course",
        price: 100,
},
]

const final = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(final);
