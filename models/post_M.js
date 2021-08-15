const { Schema, model } = require('mongoose')
const moment = require('moment')
moment.locale('ru');

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  date: {
    type: String,
    default: moment().format('L')
  },
})

module.exports = model('Post', postSchema)
