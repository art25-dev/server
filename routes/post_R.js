const { Router}  = require('express')
const post_C = require("../controllers/post_C")
const router = Router()

// Получение списка постов
router.get('/', (req, res) => {
  res.json({a: 1})
})

// Создание нового поста
router.post(
  "/add/",
  post_C.create
)

// Изменение поста
router.put('/:id', (req, res) => {

})

// Удаление поста
router.delete('/:id', (req, res) => {

})

module.exports = router
