const numbers = [1 , 3, 4, 5, 6];
let sum = 0;
for (let  i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum);
module.exports = {numbers, sum};