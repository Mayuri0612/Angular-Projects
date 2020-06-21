const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//constt for port no. on which our express server will run
const PORT = 3200;
//instance of express
const app = express();
//use bodyparser to handle json form data
app.use(bodyParser.json());
//use cors
app.use(cors());

//code to test get request
app.get('/', function(req,res) {
    res.send('Hello from server')   
})

//post form data(endpoint)
app.post('/enroll', function(req, res) {
    console.log(req.body)
    res.status(200).send({"message" : "Data received"});
})
app.listen(PORT, function(){
    console.log("server running on localhost:" + PORT);
});
