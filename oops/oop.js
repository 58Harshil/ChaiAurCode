const user = {
    username:"Harshil",
    loginCount: 8,
    singedIn: true,
    
    getUserDetails: function(){
        //console.log("Got user details from server");
        //console.log(`User Name: ${this.username}`);
        console.log(this);
        
        
    }
}

const user2 = {
    username:"Harshil",
    loginCount: 8,
    singedIn: true,
    
    getUserDetails: function(){
        //console.log("Got user details from server");
        //console.log(`User Name: ${this.username}`);
        console.log(this);
        
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//const promises1 = new promise();
//const date = new Date();
function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    //return this
}
const user1 = new  User("Harshil",12,true)
const user3 = new User("Chai aur code",11,false)
console.log(user1.contractor);
console.log(user3);
