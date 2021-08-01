const Post = require("../models/post_M")

// Функция получения всех постов
module.exports.all = async (req, res) => {
  try {
    const post = await Post.find()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция получения одного поста по id
module.exports.id = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция создания поста
module.exports.add = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  })
  try {
    await post.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция удаления поста по id
module.exports.del = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: "Объявление удалено" })
  } catch (e) {
    res.status(500).json(e)
  }
}
