const mongoose = require('mongoose');

function connectToDb() {
    return mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectToDb;
