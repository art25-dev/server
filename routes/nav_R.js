const { Router}  = require('express')
const nav_C = require("../controllers/nav_C")
const router = Router()

// Получение всех пунктов меню
router.get(
  "/all/",
  nav_C.all
)

// Получение дочерних пунктов меню
router.get(
  "/children/:id",
  nav_C.children
)

// Получение пункта меню по ID
router.get(
  "/:id/",
  nav_C.id
)

// Создание нового пункта меню
router.post(
  "/add/",
  nav_C.add
)

// Изменение пункта меню по ID
router.put(
  '/edit/:id', 
  nav_C.edit  
)

// Удаление пункта меню по ID
router.delete(
  "/del/:id",
  nav_C.del
)

module.exports = router
