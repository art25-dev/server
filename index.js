const consola = require('consola')
const express = require('express')
const path = require('path')
const keys = require("./keys")
const app = express()

const HOST = process.env.HOST || keys.HOST
const PORT = process.env.PORT || keys.PORT

const postRoutes = require('./routes/post_R')

const mongoose = require("mongoose")

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/post', postRoutes)

app.use((req, res, next) => {
  res.sendFile('/index.html')
})


async function start() {
  try {
    // Подкдючение к БД
    await mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // Запуск сервера
    app.listen(PORT, HOST, () => {
      consola.ready({
        message: `Server listening on http://${HOST}:${PORT}`,
        badge: true
      })
    })
  } catch (error) {}
}

start()


