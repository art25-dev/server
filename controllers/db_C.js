const path = require('path')
const fs = require("fs")
const watch = require('node-watch')
const glob = require("glob")

// Функция получения информации о БД
module.exports.getDbInfo = async (req, res) => {
  try {
    const dbInfo = {
      date: null,
      size: null,
      status: null
    }
    glob(`**/${path.join(__dirname, '../sources/db')}/*.zip`, (er, files) => {
      if(files.length === 0) {
        dbInfo.status = false
      } else {
        dbInfo.date = Date.now()
        dbInfo.size = fs.statSync(files[0]).size
        dbInfo.status = true
      }

      io.on('connection', socket => {
        socket.emit('dbInfo', dbInfo)
      })
    })

    watch(path.join(__dirname, '../sources/db'), { recursive: false, filter: /\.zip$/ }, (evt, name) => {
      if (evt == 'update') {
        dbInfo.date = Date.now()
        dbInfo.size = fs.statSync(name).size
        dbInfo.status = true

        io.on('connection', socket => {
          socket.emit('dbInfo', dbInfo)
        })
      }
      if (evt == 'remove') {
        glob(`**/${path.join(__dirname, '../sources/db')}/*.zip`, (er, files) => {
          if(files.length === 0) {
            dbInfo.date = null
            dbInfo.size = null
            dbInfo.status = false

            io.on('connection', socket => {
              socket.emit('dbInfo', dbInfo)
            })
          }
        })
      }
    });
    // res.status(200).json({})
  } catch (e) {
    // res.status(500).json(e)
  }
}
