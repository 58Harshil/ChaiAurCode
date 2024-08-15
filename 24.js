(function chai(){
    console.log(`DB connection`);  
}());

((name)=> {
    console.log(`DB connection TWO ${name}`);
    
})(`Harsh`);