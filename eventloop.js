const fs = required('fs');

setTimeout(() => console.log('Timer 1 is finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('text-file.txt', () => {
    console.log('i/o finished');
});