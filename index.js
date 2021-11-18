// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('Variable a ' + (Array.isArray(a)? 'is ' : 'is not ') + 'an array')
console.log('Variable a ' + (Array.isArray(b)? 'is ' : 'is not ') + 'an array')


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(e => {return e * 2})
console.log(a)


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.toString().replaceAll(',', ' '))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.toString().replaceAll(',', '+'))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString())


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((num1, num2) => {return num2-num1}))


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log(a.sort( (element1,element2) => {
    a.filter(v => v===element1).length // extract the occurrence of the first element
    - a.filter(v => v===element2).length // extract the occurrence of the second element
}).pop())
