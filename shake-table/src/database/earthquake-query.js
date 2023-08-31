exports.findAllEarthquake = () => {
  return `
    SELECT * 
        FROM shaketable
    `;
};

exports.findEarthquakeByEarthquakeIndex = (earthquake_index) => {
  return `
    SELECT * 
        FROM shaketable
        WHERE earthquake_index = ${earthquake_index}
    `;
};

exports.registEarthquake = () => {
  return `
        INSERT INTO shaketable (
          earthquakeIndex,
          earthquakeScale,
          countryName,
          occurLocation,
          occurDepth,
          occurTime,
          latitude,
          longitude,
        )
        VALUES (null,?,?,?,?,?,?,?)
    `;
};

// exports.updateOrder = (orderId) => {
//   return `
//         UPDATE ORDER_TBL
//         SET total_price =?,
//             order_date =?
//         WHERE id =${orderId}
//     `;
// };

// exports.deleteOrder = (orderId) => {
//   return `
//         DELETE FROM ORDER_TBL
//         WHERE id = ${orderId}
//     `;
// };
