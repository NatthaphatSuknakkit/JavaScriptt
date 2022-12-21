let num1 ='150';
let flol ='1.50';

console.log("********Convering strings to intntegers********");
//Convering strings to intntegers
console.log(Performan('100'));
console.log(Performan(num1));
console.log(Performan('ABC'));
console.log(Performan('0XF')); //Hexadecimal number

console.log("********Converting string to float********");
//Converting string to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat('flol'));
console.log(parseFloat('ABC'));

console.log("********Moer Conversion Examples********");
//Moer Conversion Examples
//Numbera after special characers are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt('${1+1}'));

console.log ("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flol.toString());
console.log((100).toString());