const name = "Harshil";
const repoCount = 50;
//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('Hello-CC-com')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(1,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Hello  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://localhost.com/harshil%20choudhary";
console.log(url.replace('%20','-'))
console.log(url.includes('harshil'));

console.log(gameName.split("-"));
//console.log(gameName);

