function sayMyName ()
{
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
//sayMyName()

function addNumbers (a, b)
{
    return a + b;
}
//console.log(addNumbers(5, 10));

function loginUserMessage(username = "Sam")
{
    if(!username)
        {
            console.log("Please enter a username");
            return
            
        }
    return`${username} just logged in`
}
//console.log(loginUserMessage("Harshil"));
//console.log(loginUserMessage("Harsh")); 

function calculateCartPrice(val1,val2,...num1)
{
return num1
}
//console.log(calculateCartPrice(200,300,500))

const user = {
    username: "John",
    prices:133,
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "Jane",
    price: 233,
})

const myNewArray = [200,300,400,800]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,600,400,500]));

