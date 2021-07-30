const Post = require("../models/post_M")


// Функция получения всех постов из БД
module.exports.getAllPost = async (req, res) => {
  try {} catch (e) {
    res.status(500).json(e)
  }
},

// Функция создания поста
module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  })
  try {
    await post.save()
    consola.info({
      message: post,
      badge: true
    })
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
},

// Функция удаления поста
module.exports.remove = async (req, res) => {
  try {} catch (e) {
    res.status(500).json(e)
  }
}
