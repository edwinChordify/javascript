const express = require('express');
 
const bodyParser = require('body-parser');
 
const app = express();
 
const port = 3000;
 
app.use(bodyParser.urlencoded());
 
app.get('/', function (req, res) {
    res.send('Hello World!');
});
 
 
app.get('/page', function (req, res) {
    res.send('Hello Page!');
})
 
app.post('/page-post', function (req, res) {
    console.log(" body data ", req.body);
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