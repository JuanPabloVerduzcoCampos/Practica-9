const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Hi bby :3</h1>
    </body>
    </html>`);
});

app.get('/uno', (req, res) => {
    res.send('Hello world, from route one');
});

app.get('/prueba', (req, res) => {
    res.send('Hello world, from route prueba');
});

app.listen(3000);