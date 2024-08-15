const user = {
  username: "admin",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
    
  },
};
/*
user.welcomeMessage()
user.username = "Sam";
user.welcomeMessage()
*/

//console.log(this);
/*
function chai ()
{
    let username = "Hatrsil"
    console.log(this.username);
}
chai()
*/
/*
const chai = function ()
{
    let username = "Hatrsil"
    console.log(this.username);
} 
    */
const chai = ()=>{
    let username = "Hatrsil"
    console.log(this);
} 
//chai()

//const addTwo = (num1,num2)=> num1 + num2;
//const addTwo = (num1,num2)=> (num1 + num2);
const addTwo = (num1,num2)=> ({username : "Hatrsil"})

console.log(addTwo(3,4));

const myArray = [1,2,3,4]
//myArray.forEach(()=>());
