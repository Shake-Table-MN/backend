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

// exports.updateOrder = (connection, orderId, updateOrder) => {
//   return new Promise((resolve, reject) => {
//     connection.query(earthquakeQuery.updateOrder(orderId), [updateOrder.totalPrice, updateOrder.orderDate], (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       console.log("repo result : ", result);
//       resolve(result);
//     });
//   });
// };

// exports.deleteOrder = (connection, orderId) => {
//   return new Promise((resolve, reject) => {
//     connection.query(earthquakeQuery.deleteOrder(orderId), (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };
