const router = require("express").Router()
const order = require("./order-route")

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: 메뉴 정보 CRUD
 */
router.use("/", order)

module.exports = router