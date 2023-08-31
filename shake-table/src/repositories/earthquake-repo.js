const earthquakeQuery = require("../database/earthquake-query");

exports.findAllEarthquake = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(earthquakeQuery.findAllEarthquake(), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.findEarthquakeByEarthquakeIndex = (connection, earthquake_index) => {
  return new Promise((resolve, reject) => {
    connection.query(earthquakeQuery.findEarthquakeByEarthquakeIndex(earthquake_index), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.registNewEarthquake = (connection, newEartquake) => {
  return new Promise((resolve, reject) => {
    connection.query(earthquakeQuery.registEarthquake(),
      [
        newEartquake.earthquake_index, 
        newEartquake.earthquakeScale, 
        newEartquake.countryName, 
        newEartquake.occurLocation,
        newEartquake.occurDepth, 
        newEartquake.occurTime, 
        newEartquake.latitude, 
        newEartquake.longitude
      ],
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log("repo result : ", result);
        resolve(result);
    });
  });
};

exports.updateEarthquake = (connection, earthquake_index, updatEarthquake) => {
  return new Promise((resolve, reject) => {
    connection.query(earthquakeQuery.updateEarthquake(earthquake_index),
      [ 
        updatEarthquake.earthquakeScale, 
        updatEarthquake.countryName, 
        updatEarthquake.occurLocation,
        updatEarthquake.occurDepth, 
        updatEarthquake.occurTime, 
        updatEarthquake.latitude, 
        updatEarthquake.longitude
      ],
      (err, result) => {
        if (err) {
          reject(err);
        }
      console.log("repo result : ", result);
      resolve(result);
    });
  });
};

exports.deleteEarthquake = (connection, earthquake_index) => {
  return new Promise((resolve, reject) => {
    connection.query(earthquakeQuery.deleteEarthquake(earthquake_index), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
