const mongoose = require('mongoose')
const config = require('../configs/app')

const database = {

  mongoDB(){
    const db = mongoose.connect(config.mongodbUri, error => {
      if (error)  console.error('MongoDB error: ', error) 
      console.log("MongoDB connected")
    });
    return db;
  },

}

module.exports = database.mongoDB()