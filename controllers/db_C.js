const path = require('path')
const fs = require("fs");
const watch = require('node-watch');

// Функция получения информации о БД
module.exports.getDbInfo = async (req, res) => {
  try {
    watch(path.join(__dirname, '../sources/db'), { recursive: false, filter: /\.zip$/ }, (evt, name) => {
      if (evt == 'update') {
        const dbInfo =  {
          date: Date.now(),
          size: fs.statSync(name).size
        }
        console.log(dbInfo);


      }
      if (evt == 'remove') {
        console.log('Базы данных отсутствуют');
      }
    });
    // res.status(200).json({})
  } catch (e) {
    // res.status(500).json(e)
  }
}
