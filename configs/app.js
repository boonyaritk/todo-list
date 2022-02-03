require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  apiVersion: process.env.API_VERSION || 1,
}