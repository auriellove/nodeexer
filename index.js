const _ = require("init");
const _ = require("lodash");
const { placeOfBirth, numbers } = require("./data.js");
const { numbers , sum} = require("./sum.js");

const person = {
    firstName: `Auriel`,
    homeTown: `Detroit, MI`,
};

const personInfo = placeOfBirth(person);
console.log(personInfo);
console.log(numbers);
console.log(sum);

// const _ = require("cowsay");

// console.log(cowsay.think({
//     text : "Hello World",
//     e: "oO",
//     t: "U",
// }));

const shuffled = _.shuffle(numbers);
console.log(shuffled);