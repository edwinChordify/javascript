const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Database Connected!'))
    .catch((err) => {
        console.log('error', err);
    });

app.use(bodyParser.urlencoded({ extended: true }));

const User = mongoose.model('User', { name: String, age: Number, gender: String });
const Todo = mongoose.model('Todo', { title: String, description: String });

const port = 4001;

app.get('/', function (req, res) {
    User.find().then((data) => {
        console.log("here are the user details", data);
    }).catch((err) => {
        console.log("error", err);
    });
});

app.post('/page-post', function (req, res) {
    const userData = new User();
    userData.name = req.body.name;
    userData.age = req.body.age;
    userData.gender = req.body.gender;

    userData.save().then((data) => {
        console.log('user saved', data);
        res.send('Hi there this is a post request');
    }).catch((err) => {
        console.log('error', err);
    });
});

app.post('/addToDo', function (req, res) {
    const addToDo = new Todo();
    addToDo.title = req.body.title;
    addToDo.description = req.body.description;

    addToDo.save().then((data) => {
        res.send("todo added")
        console.log('Todo', data);
    }).catch((err) => {
        console.log('error', err);
    });
});
app.get('/eachTask', function (req, res) {
    Todo.findById("654dfc89d1993e1143e93008").then((data) => {
        res.send("requested todo detail")
        console.log('Todo', data);

    }).catch((err) => {
        console.log('error', err);
    });
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
