const { Router}  = require('express')
const post_C = require("../controllers/post_C")
const router = Router()

// Получение всех постов
router.get(
  "/all/",
  post_C.all
)

// Получение активных постов
router.get(
  "/active/",
  post_C.active
)

// Получение поста по ID
router.get(
  "/:id/",
  post_C.id
)

// Создание нового поста
router.post(
  "/add/",
  post_C.add
)

// Изменение поста по ID
router.put('/:id', (req, res) => {

})

// Удаление поста по ID
router.delete(
  "/del/:id",
  post_C.del
)

module.exports = router
