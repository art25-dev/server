const { Schema, model } = require('mongoose')

const navSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  parent: {
    type: String,
    default: 'none'
  },
  type: {
    type: String,
    default: 'link'
  },
  file: {
    type: String,
    default: null
  },
  views: {
    type: Number,
    default: 0
  }
})

module.exports = model('Nav', navSchema)
