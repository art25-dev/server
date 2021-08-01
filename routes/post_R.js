const { Router}  = require('express')
const post_C = require("../controllers/post_C")
const router = Router()

// Получение списка постов
router.get(
  "/all/",
  post_C.all
)

// Получение списка постов
router.get(
  "/:id/",
  post_C.id
)

// Создание нового поста
router.post(
  "/add/",
  post_C.add
)

// Изменение поста
router.put('/:id', (req, res) => {

})

// Удаление поста
router.delete(
  "/del/:id",
  post_C.del
)

module.exports = router
