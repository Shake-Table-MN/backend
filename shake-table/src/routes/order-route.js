const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order-controller");

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Order
 *     description: 모든 지진 조회
 *     responses:
 *       200:
 *         description: 성공
 */
router.get("/", OrderController.findAllOrders);

/**
 * @swagger
 * /{earthquake_index}:
 *   get:
 *     tags:
 *       - Order
 *     description: 특정 지진 조회
 *     parameters:
 *       - name: earthquake_index
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: 지진 인덱스
 *     responses:
 *       200:
 *         description: 성공
 */
router.get("/:earthquake_index", OrderController.findOrderById);

router.post("/", OrderController.registOrder);
router.put("/:orderId", OrderController.updateOrder);
router.delete("/:orderId", OrderController.deleteOrder);

module.exports = router;
