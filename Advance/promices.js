const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`Async task is completed successfully`);
        resolve();
    },2000)
}) 
promise1.then(()=>{
    console.log(`Promise consume`);
    
})

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log(`Async task 2`);
        resolve()
    }, 3000);
}).then(()=>{
    console.log(`Async task 2 resolved`);
    
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username: "Harshil", password: "Pass"});
    }, 4000);
})
promise3.then((user)=>{
console.log(user);

})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Harsh", email: "harshil@gmail.com"})
        }else{
            reject("Error in promise4");
        }
    }, 5000);
})
promise4
.then((user)=>{
    console.log(user);
    return user.email
})
.then((email)=>{
    console.log(`Email: ${email}`);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log(`The promise was rejected or resolved`);
    
})

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "javascript", email: "javascript@gmail.com"})
        }else{
            reject("Error JS in promise4");
        }
    }, 6000);
})
async function consumeP5(){
    try{ const response = await promise5
        console.log(response);
    }catch (e){
    console.log("Error")

    }
    
}
consumeP5();

//async function getAllUser(){
//    try{
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    }catch(e){
//        console.log('Error ',e);
//        
//    }
//}
//getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((d)=>{
    console.log(d);
    
})
.catch(e=>{
    console.log(e);
    
})