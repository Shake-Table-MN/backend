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
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: 지진 데이터
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             earthquakeScale:
 *               type: number
 *               description: 지진의 진도
 *               example: 2.5
 *             countryName:
 *               type: string 
 *               description: 지진이 발생한 국가 이름 ex) 인도네시아
 *             occurLocation:
 *               type: string 
 *               description: 지진이 발생한 위치 ex) 인도네시아 마타람 북북동쪽 207km 해역
 *             occurDepth:
 *               type: string 
 *               description: 지진의 깊이 ex) 516km
 *             occurTime:
 *               type: string 
 *               description: 지진이 발생한 시간 ex) 2023/08/29 04:55:42
 *             latitude:
 *               type: string 
 *               description: 지진의 위도 ex) 6.78S
 *             longitude:
 *               type: string 
 *               description: 지진의 경도 ex) 116.57E
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
