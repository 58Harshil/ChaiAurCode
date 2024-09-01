//let myName = "harshil   "
//let myChannel = "Chai  "
//console.log(myName.trueLength)

let myHero = ["thor","Spiderman"]
let heroPower = {
    thor:"Hammer",
    spiderman:"Webs",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}
Object.prototype.harshil = function(){
    console.log(`Harshil is present in all object`);
    
}
Array.prototype.heyharshil = function(){
    console.log(`Harshil say hello`);
    
}

//heroPower.harshil()
//myHero.harshil()
//myHero.harshil()
//myHero.heyharshil()
//heroPower.heyharshil()


const user = {
    name:"John",
    email:"john@example.com",
}
const teacher = {
    makeVideo:true,

}
const teacheingSuppport ={
    isavailable:false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime:true,
    __proto__: teacheingSuppport
}

//teacher.__proto__= User
Object.setPrototypeOf(teacheingSuppport,teacher)

let anotherusername = "ChaiUser  "
String.prototype.truelenght = function(){
    console.log(`${this}`);
    
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherusername.truelenght()
"Harshil".truelenght()
"icetea".truelenght()