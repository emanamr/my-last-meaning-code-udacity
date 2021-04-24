//for api key
const dotenv = require('dotenv');
dotenv.config();

///testing api key
let key = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);


//////////////////----------------/////////////////////

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
var axios = require('axios')
const StandardURL = 'https://api.meaningcloud.com/sentiment-2.1'


//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())
app.use(express.json({extended: false}))
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})


app.post('/articalurl', async (req, res) => {

    let url = req.body.data
    console.log('server ' + url);
    
    //const key = process.env.API_KEY;
   
    //https://api.meaningcloud.com/sentiment-2.1?key=de442389c12c633a7b1b684c038c77cb&url=https://developer.mozilla.org/en-US/docs/Web/CSS/background&lang=en
   
    const articalUrl = `${StandardURL}?key=${key}&url=${url}&lang=en`
    
    //fetch(articalUrl)
    axios.post(articalUrl)
        .then(response => { 
            res.send(response.data)
    })
        .catch(error => {
            console.log(error);
        })
    })

// designates what port the app will listen to for incoming requests
app.listen(8009, function () {
    console.log('Example app listening on port 8009!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

