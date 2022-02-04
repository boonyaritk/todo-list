require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  apiVersion: process.env.API_VERSION || 1,
  mongodbUri: process.env.MONGO_URI || 'mongodb://127.0.0.1/todo-list',
}