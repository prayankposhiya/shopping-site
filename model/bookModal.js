// const fs = require("fs");
// // const db = require("../database/database");
// const { sequelize, DataTypes } = require("../database/database");
// const Book = sequelize.define("Books", {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
// module.exports.books = class Books {
//   constructor(book) {
//     this.book = book;
//   }
//   save() {
//     return Book.create({
//       title: this.book.title,
//       price: this.book.price,
//       description: this.book.description,
//       UserId: this.book.UserId,
//     });
//     // return db.execute(
//     //   `INSERT INTO node_schema.books(title,price,description) VALUES ('${this.book.title}','${this.book.price}','${this.book.description}')`
//     // );
//   }
//   static async fetchAllBooks() {
//     const books = await Book.findAll();
//     return JSON.stringify(books, null, 2);
//     // return db.execute("SELECT * FROM node_schema.books");
//   }
//   static async fetchBook(bookId) {
//     const book = await Book.findAll({
//       where: {
//         id: bookId,
//       },
//     });
//     return JSON.stringify(book, null, 2);
//     // return db.execute(`SELECT * FROM node_schema.books WHERE id=${bookId}`);
//   }
//   static deleteBook(bookId) {
//     return Book.destroy({
//       where: {
//         id: bookId,
//       },
//     });
//     // return db.execute(`DELETE FROM node_schema.books WHERE id=${bookId}`);
//   }
//   static editBook(book) {
//     Book.update(
//       {
//         id: book.id,
//         title: book.title,
//         price: book.price,
//         description: book.description,
//       },
//       {
//         where: {
//           id: book.id,
//         },
//       }
//     );
//     // db.execute(
//     //   `UPDATE node_schema.books SET title='${book.title}',price='${book.price}',description='${book.description}' WHERE id='${book.id}'`
//     // );
//   }
// };
// module.exports.Book = Book;
