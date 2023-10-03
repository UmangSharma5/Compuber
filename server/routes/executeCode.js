const express = require('express');
const fs = require('fs');
const { exec } = require("child_process");



const router = express.Router();


router.get('/',(req,res)=>{
    res.send("hey yo");
});

router.post('/',(req,res)=>{
    try{
        console.log("hello");
        console.log(req.body);

        fs.writeFile('codes/code.cpp', req.body.code, err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
        exec("emcc codes/code.cpp -o codes/code.wasm", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        
        res.json({isUploded : 1});
    }catch(error){
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;