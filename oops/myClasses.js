/*class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
    ChnageUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai","chai@gmail.com","1234");
console.log(chai.encryptedPassword());
console.log(chai.ChnageUserName());
*/
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptedPassword = function(){
    return `${this.password}abc`
}
User.prototype.ChnageUserName = function(){
    return `${this.username.toUpperCase()}abc`
}
const Tea = new User("Tea","chai@gmail.com","1234");
console.log(Tea.encryptedPassword());
console.log(Tea.ChnageUserName());