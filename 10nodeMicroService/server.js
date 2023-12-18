// console.log("hello server")

const express = require('express')


const app = express();

app.use(express.static('webapp'));

app.get('/', function (req, res) {
  res.send('Hello SAP Btp Developers')
})

// app.get('/index.html',(req,res)=>{
//        res.sendFile(__dirname + '/webapp/index.html');
// })

// app.get('/vendors',(req,res)=>{
//     res.sendFile(__dirname + '/webapp/vendors.json');
// })

// app.get('/myfile',(req,res)=>{
//     res.sendFile(__dirname + '/webapp/myfile.txt');
// })


console.log( "local server running on http://localhost:3000");

app.listen(process.env.PORT || 3000)

