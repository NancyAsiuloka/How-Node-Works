const fs = require('fs');
// another way of creating a server
const server = require('http').createServer();

server.on('request', (req, res) => {
    // solution 1
    // reading the file inot a variable and then sending it to the client
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // solution 2 streams
    const readable = fs.createReadStream('test-file.txt');
    readable.on('data', chunk => {
        res.write(chunk);
    })
    readable.on('end', () => {
        res.end();
    });
    readable.on('error', err => {
        console.error(err);
        res.statusCode = 500;
        res.end('file not found');
    })
});

// restarting the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
});
