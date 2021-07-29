const { Router}  = require('express')
const router = Router()

// Получение списка постов
router.get('/', (req, res) => {
  res.json({a: 1})
})

// Создание нового поста
router.post('/', (req, res) => {

})

// Изменение поста
router.put('/:id', (req, res) => {

})

// Удаление поста
router.delete('/:id', (req, res) => {

})

module.exports = router