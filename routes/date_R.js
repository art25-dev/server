const { Router}  = require('express')
const date_C = require("../controllers/date_C")
const router = Router()

// Получение даты и времени
router.get(
  "/",
  date_C.getDate
)

router.get(
  "/db/",
  date_C.getDateDb
)

module.exports = router
