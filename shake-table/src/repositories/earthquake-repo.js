const orderQuery = require("../database/earthquake-query");

exports.findAllEarthquake = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.findAllEarthquake(), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.findEarthquakeByEarthquakeIndex = (connection, earthquake_index) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.findEarthquakeByEarthquakeIndex(earthquake_index), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.registNewEarthquake = (connection, newOrder) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.registEarthquake()
    ,[newOrder.earthquake_index=null, newOrder.orderDate],
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
//     connection.query(orderQuery.updateOrder(orderId), [updateOrder.totalPrice, updateOrder.orderDate], (err, result) => {
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
//     connection.query(orderQuery.deleteOrder(orderId), (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };
