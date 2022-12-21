let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

console.log(plusFive(3)); // 8
// Since of has a function value, it can ve invoked
console.log(f(9)); // 14
