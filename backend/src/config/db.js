const mongoose = require('mongoose')

module.exports = {
    dbConnect: () => {
        mongoose.connect("mongodb+srv://user:bentley@cluster0.uqeti.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('DB Connected') );
    }
}