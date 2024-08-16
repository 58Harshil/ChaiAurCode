// for of
/*
const arr = [1,2,3,4,5,6,7,8,9]
for (const i of arr) {
    //console.log(i);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
   // console.log(greet);
    
}
*/

//Maps (inquire values)
/*
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America") 
map.set('FR',"France")
*/
//console.log(map);
/*
for (const [key,value] of map) {
   // console.log(key, '- ', value);
    
}
*/
/*
const myObj = {
    'Game1': 'NPS',
    'Game2': 'Moba',
    'Game3': 'CS:GO'
}
    */
/*
for (const [key,value] of myObj) {
    console.log(key, '- ', value)
    
}
    */
/*
const myObj2 = {
    js:'javascript',
    py:'python',
    rb:'ruby',
    cpp:'c++'
}

for (const key in myObj2) {
    //console.log(`${key} shortcut is for ${myObj2[key]}`)
    
}

const prog = ["js", "py", "rb", "cpp"]
for (const key in prog) {
   // console.log(prog[key]);
    
}
*/
/*
const mapp = new Map()
map.set('IN',"India")
map.set('USA',"United States of America") 
map.set('FR',"France")

for (const key in mapp) {
    console.log(mapp[key]);
    
}
    */

const coding = [ "js", "css", "ruby","javascript","xml"]
coding.forEach(function(iten){
   // console.log(iten);
})

coding.forEach((item)=>{
    //console.log(item);
    
})

function printMe(item){
   // console.log(item);
    
}
//coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})