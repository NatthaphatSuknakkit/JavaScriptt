const kvArray = [
    {kye : 1 , value : 10},
    {kye : 2 , value : 20},
    {kye : 3 , value : 30},
];

const reformattedArray = kvArray.map(({key , value}) => ({[key]:value}));

console.log(reformattedArray); // [{ 1 : 10} , {2 : 20} , {3 : 30}]
console.log(kvArray);
