const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  endedAt: {
    type: String,
  },
})

module.exports = mongoose.model('List', schema)