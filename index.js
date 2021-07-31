const consola = require('consola')
const express = require('express')
const path = require('path')
const keys = require("./keys")
const app = express()
const mongoose = require("mongoose")
const postRoutes = require('./routes/post_R')

const HOST = process.env.HOST || keys.HOST
const PORT = process.env.PORT || keys.PORT


// Обработка JSON
app.use(express.json())

// Регистрация статичной директории
app.use(express.static(path.join(__dirname, 'public')))

// Регистрация роутов
app.use("/api/post", postRoutes)


app.use((req, res, next) => {
  res.sendFile('/index.html')
})

async function start() {
  try {
    // Подкдючение к БД
    await mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    if (mongoose.connection.readyState === 1) {
      consola.info({
        message: `MongoDB connection - ${keys.MONGO_URI}`,
        badge: true
      })
    }

    // Запуск сервера
    app.listen(PORT, HOST, () => {
      consola.ready({
        message: `Server listening - http://${HOST}:${PORT}`,
        badge: true
      })
    })
  } catch (error) {
    consola.error({
      message: error,
      badge: true
    })
  }
}

start()


