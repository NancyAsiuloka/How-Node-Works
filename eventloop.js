const fs = required('fs');

setTimeout(() => console.log('Timer 1 is finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
    console.log('i/o finished');
});

console.log('Hello from the top level code');

