const express = require('express')
const path = require('path');

module.exports = async (app) => {

  //Connect database
  require('../configs/database')

  // Parser Body
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  // Static file
  app.use('/static', express.static(path.join(__dirname, '../public')))

}