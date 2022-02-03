const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    required: true
  },
  endAt: {
    type: Date,
    required: true
  },
})

module.exports = mongoose.model('List', schema)