const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

const executeCode = require('./routes/executeCode');

app.use('/executeCode',executeCode);


app.get('/*', function (req, res) {
    res.send("Nothing as such");
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})