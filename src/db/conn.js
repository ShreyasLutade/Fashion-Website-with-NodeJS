const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shreyas05:Shreyas123@cluster0.96jxps0.mongodb.net/fashionRegister?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("Connected to MongoDB Atlas");
}).catch(err => {
    console.log("Error: ", err.message);
});
require('../models/passport');