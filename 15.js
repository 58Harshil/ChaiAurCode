const mervel_hero = ["Harshil","Ironman","Spiderman"]
const dc = ["Karan","Superman","antman"]

//mervel_hero.push(dc)
//console.log(mervel_hero);
//console.log(mervel_hero[3]);

//const callheros = mervel_hero.concat(dc)
//console.log(callheros);

const all_heroes =[...mervel_hero, ...dc]
//console.log(all_heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5,]]]
const real_another_array = anotherArray.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("Harshil"))
console.log(Array.from("Harshil"))
console.log(Array.from({name:"Harshil"}))

//of method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

//from method
let score4 = [400,500,6000]
console.log(Array.from(score4));