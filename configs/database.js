const mongoose = require('mongoose')
const config = require('../configs/app')

const databases = {

  mongoDB(){
    const db = mongoose.connect(config.mongodbUri, error => {
      if (error)  console.error('MongoDB error: ', error) 
      console.log("MongoDB connected")
    });
    return db;
  },

}

module.exports = databases.mongoDB()