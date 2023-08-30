exports.findAllOrders = () => {
  return `
    SELECT * 
        FROM shaketable
    `;
};

exports.findOrderById = (earthquake_index) => {
  return `
    SELECT * 
        FROM shaketable
        WHERE earthquake_index = ${earthquake_index}
    `;
};

// exports.registOrder = () => {
//   return `
//         INSERT INTO ORDER_TBL (
//             total_price,
//             order_date
//         )
//         VALUES (?,?)
//     `;
// };

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
