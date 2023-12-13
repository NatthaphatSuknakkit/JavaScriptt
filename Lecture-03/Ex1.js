const array1 = [ 'Apple', 2  , false ];
const array2 = [ 'Apple', 2  , true ];
const array3 = [ 'Mars', 5  , 'Apple' ];

const commonElements = array1.filter(value => array2.includes(value) && array3.includes(value));

console.log("Common elements:", commonElements);