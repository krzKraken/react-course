//  Arrays
//Comen
// array with number of items 
const array = new Array(100);
console.log(array);

const my_array = [1,2,3,4];

//* Operator spread
// Create a new array copying other array
const my_array2 = [...my_array, 5];
console.log(my_array);
console.log(my_array2);
console.log(array);

//* Using .map(funtion())
const my_array3 = my_array2.map(function (number){
    return number * 2;
})


console.log(my_array3);