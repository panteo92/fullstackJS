import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello fuckin Express and <em>EJS</em>!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});




// SERVER CALL FOR AN HTML PAGE and HANDLE ROUTE
// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });


// HOW TO SET UP A SERVER WITH PLAIN JS
// import http from 'http';

// const server = http.createServer();

// server.listen(8080);

// server.on('request', (req, res) => {
//     res.write('Hello HTTP!\n');
//     setTimeout(() => {
//         res.write('I can stream!\n');
//         res.end();
//     }, 3000);
// });

// server.listen(8080);




// HOW TO USE HTTPS MODULE
// import https from 'https';

// https.get('https://www.lynda.com', res => {
//     console.log('Response status code: ', res.statusCode);

//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     });
// });