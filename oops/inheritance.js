class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email,
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new teacher("chai","chai@gmail.com","1234");
chai.addCourse()
const tea = new User("Masala Tea")
tea.logMe()
console.log(chai instanceof teacher);
