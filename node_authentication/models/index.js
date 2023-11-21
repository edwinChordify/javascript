const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/temp')
    .then(() => console.log("dadtabase conncetd"))
    .catch((err) => {
        console.log("error", err);
    })