const express = require('express')

module.exports = async (app) => {

  // Connect database
  // import('../configs')

  // Parser Body
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  // Static file
  app.use('/static', express.static(path.join(__dirname, '../public')))

}