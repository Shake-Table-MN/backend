const getConnection = require("../database/connection");
const EarthquakeRepository = require("../repositories/earthquake-repo");

exports.findAllEarthquake = () => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    const results = await EarthquakeRepository.findAllEarthquake(connection);
    connection.end();
    resolve(results);
  });
};

exports.findEarthquakeByEarthquakeIndex = (earthquake_index) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    const results = await EarthquakeRepository.findEarthquakeByEarthquakeIndex(connection, earthquake_index);
    connection.end();
    resolve(results);
  });
};

exports.registEarthquake = (newEarthquake) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await EarthquakeRepository.registNewEarthquake(connection, newEarthquake);

      const insertEarthquake = await EarthquakeRepository.findEarthquakeByEarthquakeIndex(connection, result.insertId);
      resolve(insertEarthquake);
      connection.commit();
      console.log("commit successfully");
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};

exports.updateOrder = (orderId, updateOrder) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await OrderRepository.updateOrder(connection, orderId, updateOrder);
      if (result.changedRows > 0) {
        const insertedOrder = await OrderRepository.findOrderById(connection, orderId);
        resolve(insertedOrder);
        connection.commit();
        console.log("commit successfully");
      } else {
        resolve(null);
        connection.rollback();
        console.log("변경된 데이터가 존재하지 않습니다.");
      }
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};

exports.deleteOrder = (orderId) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await OrderRepository.deleteOrder(connection, orderId);
      if (result.affectedRows > 0) {
        resolve(true);
        connection.commit();
        console.log("commit successfully");
      } else {
        resolve(false);
        connection.rollback();
        console.log("삭제할 데이터가 존재하지 않습니다.");
      }
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};
