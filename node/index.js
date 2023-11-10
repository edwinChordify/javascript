const express = require('express');
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Database Connected!')).catch((err) => {
        console.log('error', err);
    })


app.use(bodyParser.urlencoded());




const User = mongoose.model('User', { name: String, age: Number, gender: String })



const port = 7000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/page', function (req, res) {
    res.send('Hello Page!');
})

app.post('/page-post', function (req, res) {
    const userData = new User()
    userData.name = req.body.name
    userData.age = req.body.age
    userData.gender = req.body.gender

    userData.save().then((data) => {
        console.log('user saved', data);
    }).catch((err) => {
        console.log('error', err);
    })

    res.send('Hi there this is a post request');
});


app.put('/page-put', function (req, res) {
    console.log(" body data put", req.body);
    res.send('Hi there this is a put request');
});


app.delete('/page-delete', function (req, res) {
    res.send('Hi there this is a delete request');
});

app.patch('/page-patch', function (req, res) {
    console.log(" body data patch", req.body.age);
    res.send('Hi there this is a patch request');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})