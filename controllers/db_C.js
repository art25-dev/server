const path = require('path')

const chokidar = require('chokidar');

// Функция получения информации о БД
module.exports.getDbInfo = async (req, res) => {
  try {
    const dbInfo = {
      date: null,
      size: null,
      status: false
    }

    io.on('connection', socket => {
      const watcher = chokidar.watch(path.join(__dirname, '../sources/db'), {
        ignored: /(png|jpg|jpeg|pdf)$/, // ignore dotfiles
        persistent: true
      });

      watcher.on('add', (path, stats) => {
        dbInfo.date = Date.now()
        dbInfo.size = (stats === undefined) ? null : stats.size
        dbInfo.status = true

        socket.emit('dbInfo', dbInfo)
        console.log(dbInfo)
      })

      watcher.on('unlink', (path, stats) => {
        dbInfo.date = null
        dbInfo.size = null
        dbInfo.status = false

        socket.emit('dbInfo', dbInfo)
        console.log(dbInfo)
      })

    })
  } catch (e) {}
}
