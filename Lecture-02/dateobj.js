//Date function return milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
// this example take 2 seconda to run 
const start = Datr.now();

console.log('starting timer...');
// expected output: starting timer....

setTimeout(() => {
    const millis = Date.now() - start;

    console.log('seconds elapsed = ${Math.floor(millis / 1000)}');
    //expected output: seconds elapsed = 2
}, 2000);
