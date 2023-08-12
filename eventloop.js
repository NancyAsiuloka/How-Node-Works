const fs = require('fs');
const cryto = require('cryto');

setTimeout(() => console.log('Timer 1 is finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
    console.log('i/o finished');
    console.log('----------------');

    setTimeout(() => console.log('Timer 2 is finished'), 0);
    setTimeout(() => console.log('Timer 3 is finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finished'));

    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log('password encrypted');
    })
});

console.log('Hello from the top level code');

