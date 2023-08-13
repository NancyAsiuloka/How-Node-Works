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

    // solution 2 streams and event
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.error(err);
    //     res.statusCode = 500;
    //     res.end('file not found');
    // });

    // Solution 3: Best one, using pipe operation
    // to fix the problem of back pressure
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writableDestination)

});

// restarting the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
});
