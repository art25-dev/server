const { Router }  = require('express')
const db_C = require("../controllers/db_C")
const router = Router()

router.get(
  "/db/",
  db_C.getDbInfo
)

module.exports = router
