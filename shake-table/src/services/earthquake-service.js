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

exports.updateEarthquake = (earthquake_index, updatEarthquake) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await EarthquakeRepository.updateEarthquake(connection, earthquake_index, updatEarthquake);
      if (result.changedRows > 0) {
        const insertedEarthquake = await EarthquakeRepository.findEarthquakeByEarthquakeIndex(connection, earthquake_index);
        resolve(insertedEarthquake);
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

exports.deleteEarthquake = (earthquake_index) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await EarthquakeRepository.deleteEarthquake(connection, earthquake_index);
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
