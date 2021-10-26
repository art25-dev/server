const path = require('path')
var fs = require("fs"); //Load the filesystem module
const chokidar = require('chokidar');
const FindFiles = require('file-regex');
const { patch } = require('..');



// Функция получения информации о БД
module.exports.getDbInfo = async (req, res) => {
  try {
    const dir = path.join(__dirname, '../sources/db')
    const trueDbInfo = {
      date: null,
      name: null
    }

    const dbInfo = {
      date: null,
      size: null,
      status: false
    }

    const result = await FindFiles(dir, /\.zip$/);
    console.log(result[0]);
    res.status(201).json(dbInfo)

    // const watcher = chokidar.watch(dir, {
    //   ignored: /(^|[\/\\])\../, // ignore dotfiles
    //   persistent: true
    // });

    // watcher.on('add', (path, stats) => {
    //   console.log(stats);

    //   dbInfo.date = Date.now()
    //   dbInfo.size = stats.size
    //   dbInfo.status = true

    //   io.emit('dbInfo', dbInfo)
    //   console.log(dbInfo)
    // })

    // watcher.on('unlink', (path, stats) => {
    //   dbInfo.date = null
    //   dbInfo.size = null
    //   dbInfo.status = false

    //   io.emit('dbInfo', dbInfo)
    //   console.log(dbInfo)
    // })
  } catch (e) {
    // res.status(500).json(e)
  }
}
