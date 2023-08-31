const express = require("express");
const router = express.Router();

const earthquakeController = require("../controllers/earthquake-controller");

/**
 * @swagger
 * /earthquake:
 *   get:
 *     tags:
 *       - earthquake
 *     description: 지진 전체 조회
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
 *       - earthquake
 *     description: 특정 지진 조회
 *     parameters:
 *       - name: earthquake_index
 *         in: path
 *         required: true
 *         schema:
 *           type: INTEGER
 *         description: 관리번호
 *     responses:
 *       200:
 *         description: 성공
 */
router.get("/:earthquake_index", earthquakeController.findEarthquakeByEarthquakeIndex);
/**
 * @swagger
 * /earthquake:
 *   post:
 *     tags:
 *       - earthquake
 *     description: 지진 등록
 *     parameters:
 *       - name: earthquakeScale
 *         in: path
 *         description: 지진의 규모
 *         required: true
 *         schema:
 *           type: number
 *       - name: countryName
 *         in: path
 *         description: 지진이 발생한 국가 이름
 *         required: true
 *         schema:
 *           type: string
 *       - name: occurLocation
 *         in: path
 *         description: 지진이 발생한 위치
 *         required: true
 *         schema:
 *           type: string
 *       - name: occurDepth
 *         in: path
 *         description: 지진의 깊이
 *         required: true
 *         schema:
 *           type: number
 *       - name: occurTime
 *         in: path
 *         description: 지진이 발생한 시간
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *       - name: latitude
 *         in: path
 *         description: 지진의 위도
 *         required: true
 *         schema:
 *           type: number
 *           format: float
 *       - name: longitude
 *         in: path
 *         description: 지진의 경도
 *         required: true
 *         schema:
 *           type: number
 *           format: float
 *     responses:
 *       200:
 *         description: 성공
 *       400:
 *         description: 잘못된 요청
 */
router.post("/", earthquakeController.registEarthquake);
router.put("/:earthquake_index", earthquakeController.updateOrder);
router.delete("/:earthquake_index", earthquakeController.deleteOrder);

module.exports = router;
