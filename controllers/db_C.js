const path = require('path')

const chokidar = require('chokidar');

// Функция получения информации о БД
module.exports.getDbInfo = async (req, res) => {
  try {
    const dir = path.join(__dirname, '../sources/db')
    const dbInfo = {
      date: null,
      size: null,
      status: false
    }
    res.status(200).json(dbInfo)
    console.log(123);
    const watcher = chokidar.watch(path.join(__dirname, '../sources/db'), {
      ignored: /(png|jpg|jpeg|pdf)$/, // ignore dotfiles
      persistent: true
    });

    watcher.on('add', (path, stats) => {
      dbInfo.date = Date.now()
      dbInfo.size = null
      dbInfo.status = true

      io.emit('dbInfo', dbInfo)
      console.log(dbInfo)
    })
  } catch (e) {
    res.status(200).json(e)
  }
}

