const bookModal = require("../model/bookModal");
const cartModal = require("../model/cartModal");
module.exports.showBooks = async (req, res, next) => {
  const books = await bookModal.books.fetchAllBooks();
  res.render("shop/book-list", {
    booklist: JSON.parse(books),
    title: "Shop",
    path: "/book-list",
  });
  // bookModal.books
  //   .fetchAllBooks()
  //   .then(([booklist, formData]) => {
  //     res.render("shop/book-list", {
  //       booklist: booklist,
  //       title: "Shop",
  //       path: "/book-list",
  //     });
  //   })
  //   .catch((error) => console.log(error));
};
module.exports.showBook = async (req, res, next) => {
  const book = await bookModal.books.fetchBook(req.params.bookId);
  res.render("shop/book-details", {
    book: JSON.parse(book)[0],
    title: JSON.parse(book)[0].title,
    path: "/book",
  });
  // bookModal.books.fetchBook(req.params.bookId).then(([book, formData]) => {
  //   res.render("shop/book-details", {
  //     book: book[0],
  //     title: book[0].title,
  //     path: "/book",
  //   });
  // });
};
module.exports.showCart = (req, res) => {
  cartModal.cart.fetchCartData().then((result) => {
    const cartstring = JSON.stringify(result);
    let cartBooks = [];
    if (JSON.parse(cartstring).length > 0) {
      JSON.parse(cartstring).map(async (data) => {
        const book = await bookModal.books.fetchBook(data.id);
        cartBooks.push({ ...JSON.parse(book)[0], quy: data.quy });
        JSON.parse(cartstring).length === cartBooks.length &&
          res.render("shop/cart", {
            cart: cartBooks,
            title: "My Cart",
            path: "/cart",
          });
      });
    } else {
      res.render("shop/cart", {
        cart: cartBooks,
        title: "My Cart",
        path: "/cart",
      });
    }
  });
};
module.exports.homePage = (req, res, next) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
  });
};
module.exports.ordersPage = (req, res, next) => {
  res.render("shop/orders", {
    title: "Orders",
    path: "/orders",
  });
};
module.exports.addToCart = (req, res) => {
  cartModal.cart.addToCart(req.body.id).then(() => {
    res.redirect("/cart");
  });
};
module.exports.removeToCart = (req, res) => {
  cartModal.cart.removeToCart(req.body.id);
  res.redirect("/cart");
};
