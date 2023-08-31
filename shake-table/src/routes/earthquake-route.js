const express = require("express");
const router = express.Router();

const earthquakeController = require("../controllers/earthquake-controller");

/**
 * @swagger
 * /earthquake:
 *   get:
 *     tags:
 *       - earthquakes
 *     description: 모든 지진 조회
 *     responses:
 *       200:
 *         description: 성공
 */
router.get("/", earthquakeController.findAllEarthquake);

/**
 * @swagger
 * /earthquake/{earthquake_index}:
 *   get:
 *     tags:
 *       - Orderr
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
router.get("/:earthquake_index", earthquakeController.findEarthquakeByEarthquakeIndex);

router.post("/", earthquakeController.registEarthquake);
router.put("/:earthquake_index", earthquakeController.updateOrder);
router.delete("/:earthquake_index", earthquakeController.deleteOrder);

module.exports = router;
