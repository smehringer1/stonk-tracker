const mongoose = require('mongoose')

module.exports = {
    dbConnect: () => {
        mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('DB Connected') );
    }
}