class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createID(){
        return `123`
    }
}
const harshil = new User("harshil");
//console.log(harshil.createID())

class Teacher extends User {
    constructor(user,email){
        super(user)
        this.email = email
    }
}
const iphone = new Teacher("iphone","iphone@gmail.com")
//console.log(Teacher.createID()); 
iphone.logMe()