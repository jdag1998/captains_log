const mongoose = require('mongoose')

function mongoConfig() {
    mongoose.connect(process.env.MONGODB);
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
}

module.exports = mongoConfig
