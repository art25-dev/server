
// Функция получения всех пунктов меню
module.exports.getDate = async (req, res) => {
  try {
    const serverDate = Date.now()
    res.status(201).json(serverDate)
  } catch (e) {
    res.status(500).json(e)
  }
}
