const mySum = Symbol("Key1")

const JsUser = 
{
    name: "Harshil",
    "Full Name": "Harshil",
    [mySum]: "MyKey1",
    age: 20,
    location: "Surat",
    email: "harshil@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday","Sunday"],
} 
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySum]);
*/
JsUser.email = "harshilChoudhayr@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "harshilChoudhayr@outlook.com";
//console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello!");
}

JsUser.greeting2 = function()
{
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
