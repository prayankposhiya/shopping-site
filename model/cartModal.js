// const { sequelize, DataTypes } = require("../database/database");
// // const db = require("../database/database");
// const Cart = sequelize.define("cart", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   quy: {
//     type: DataTypes.INTEGER,
//   },
// });
// const fetchCart = async (id) => {
//   const cartdata = await Cart.findAll({
//     where: {
//       id: id,
//     },
//   });
//   return JSON.stringify(cartdata, null, 2);
//   // return db.execute(`SELECT * FROM node_schema.cart WHERE id=${id}`);
// };
// const fetchAllCartData = () => {
//   return Cart.findAll();
//   // return db.execute("SELECT * FROM node_schema.cart");
// };
// const addBookToCart = (id) => {
//   return Cart.create({
//     id: id,
//     quy: 1,
//   });
//   // db.execute(`INSERT INTO node_schema.cart (id,quy) VALUES ('${id}','1')`);
// };
// const removeBookToCart = (id) => {
//   Cart.destroy({
//     where: {
//       id: id,
//     },
//   });
//   // db.execute(`DELETE FROM node_schema.cart WHERE id=${id}`);
// };
// const updateBookToCart = (id, quy) => {
//   return Cart.update(
//     {
//       id: id,
//       quy: quy + 1,
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   );
//   // db.execute(
//   //   `UPDATE node_schema.cart SET id='${id}',quy='${quy + 1}' WHERE id=${id}`
//   // );
// };
// const updateBookToCartRemove = (id, quy) => {
//   return Cart.update(
//     {
//       id: id,
//       quy: quy - 1,
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   );
//   // db.execute(
//   //   `UPDATE node_schema.cart SET id='${id}',quy='${quy - 1}' WHERE id=${id}`
//   // );
// };
// module.exports.cart = class Cart {
//   static async addToCart(id) {
//     // console.log("id", id);
//     const cartbook = await fetchCart(id);
//     if (JSON.parse(cartbook).length > 0) {
//       updateBookToCart(id, JSON.parse(cartbook)[0].quy);
//     } else {
//       addBookToCart(id);
//     }
//   }
//   static async removeToCart(id) {
//     const cartbook = await fetchCart(id);
//     if (JSON.parse(cartbook)[0].quy === 1) {
//       removeBookToCart(id);
//     } else {
//       updateBookToCartRemove(id, JSON.parse(cartbook)[0].quy);
//     }
//   }
//   static fetchCartData = () => {
//     return fetchAllCartData();
//   };
// };
