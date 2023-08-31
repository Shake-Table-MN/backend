const router = require("express").Router()
const earthquake = require("./earthquake-route")

/**
 * @swagger
 * tags:
 *   name: earthquake
 *   description: 메뉴 정보 CRUD
 */
router.use("/earthquake", earthquake)

module.exports = router