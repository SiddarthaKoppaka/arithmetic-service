const express = require('express');
const app = express();
const { add }  = require("./arithmetica")
const path = require('path');
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
    //res.send("Arithmetic service - Hello World");
});

app.get('/add/:n/:m', (req, res) => {
    let n  = Number(req.params.n)
    let m  = Number(req.params.n)
    let sum = add(n,m);
      res.json(sum);

});

app.listen(port);