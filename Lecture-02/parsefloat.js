function circumference(r){
    if (Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcbefgh"));
//expceted output: 28.69530797889173

console.log (circumference("abcbefgh"));
//expceted output: 0