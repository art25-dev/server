const consola = require('consola')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
global.io = require('socket.io')(server)



const path = require('path')
const keys = require("./keys")
const mongoose = require("mongoose")
const postRoutes = require('./routes/post_R')
const navRoutes = require('./routes/nav_R')
const dateRoutes = require('./routes/date_R')
const dbRoutes = require('./routes/db_R')

const { getDbInfo } = require('./controllers/db_C')


const HOST = process.env.HOST || keys.HOST
const PORT = process.env.PORT || keys.PORT


// Обработка JSON
app.use(express.json())

// Регистрация статичной директории
app.use(express.static(path.join(__dirname, 'public')))

// Регистрация роутов
app.use("/api/post", postRoutes)
app.use("/api/nav", navRoutes)
app.use("/api/date", dateRoutes)
app.use("/api/db", dbRoutes)


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
    server.listen(PORT, HOST, () => {
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
module.exports = app;
start()
// getDbInfo()


