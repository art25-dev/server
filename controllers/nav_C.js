const Nav = require("../models/nav_M")

// Функция получения всех пунктов меню
module.exports.all = async (req, res) => {
  try {
    const nav = await Nav.find()
    res.status(201).json(nav)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция получения дочерних пунктов меню
module.exports.children = async (req, res) => {
  try {
    const nav = await Nav.find({parent: req.params.id})
    res.status(201).json(nav)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция получения одного поста по id
module.exports.id = async (req, res) => {
  try {
    const nav = await Nav.findById(req.params.id)
    res.status(201).json(nav)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция создания поста
module.exports.add = async (req, res) => {
  const nav = new Nav({
    title: req.body.title,
    parent: req.body.parent,
    type: req.body.type,
    file: req.body.file
  })
  try {
    await nav.save()
    res.status(201).json(nav)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция изменения поста по id
module.exports.edit = async (req, res) => {
  try {
    
  } catch (e) {
    res.status(500).json(e)
  }
}

// Функция удаления поста по id
module.exports.del = async (req, res) => {
  try {
    await Nav.deleteOne({ _id: req.params.id })
    res.json({ message: "Пункт меню удален" })
  } catch (e) {
    res.status(500).json(e)
  }
}
