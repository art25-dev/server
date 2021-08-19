const path = require('path')
const fs = require('fs');
const watch = require('node-watch');

// Функция получения даты и времени сервера
module.exports.getDate = async (req, res) => {
  try {
    const serverDate = Date.now()
    res.status(201).json(serverDate)
  } catch (e) {
    res.status(500).json(e)
  }
}




// Функция получения даты баз данных
module.exports.getDateDb = async (req, res) => {
  try {
    watch(path.join(__dirname, '../sources/db'), { recursive: false, filter: /\.zip$/ }, (evt, name) => {
      if (evt == 'update') {
        const dateDb = path.basename(name).slice(0, -4)
        console.log(dateDb);
      }
      if (evt == 'remove') {
        console.log('remove');
      }
    });
    res.status(200).json({})
  } catch (e) {
    res.status(500).json(e)
  }
}
