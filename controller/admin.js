const bookModal = require("../model/bookModal");
const userModal = require("../model/userModal");
exports.addBookPage = (req, res, next) => {
  const editable = req.query.edit;
  res.render("admin/add-book", {
    title: "Add Book",
    path: "/admin/addbook",
    edit: !!editable,
  });
};
exports.addBook = (req, res, next) => {
  console.log("addbook", req.user);
  const book = new bookModal.books({
    ...req.body,
  });
  book.save().then(() => {
    res.redirect("/book-list");
  });
};
exports.addUser = (req, res, next) => {
  const user = new userModal.user(req.body);
  user.save().then((result) => {
    const string = JSON.stringify(result, null, 2);
    req.user = JSON.parse(string);
    res.redirect("/admin/addbook");
  });
};
exports.Books = async (req, res, next) => {
  const books = await bookModal.books.fetchAllBooks();
  res.render("admin/books", {
    booklist: JSON.parse(books),
    title: "Books",
    path: "/admin/books",
  });
  // bookModal.books
  //   .fetchAllBooks()
  //   .then(([booklist, formData]) => {
  //     res.render("admin/books", {
  //       booklist: booklist,
  //       title: "Books",
  //       path: "/admin/books",
  //     });
  //   })
  //   .catch((error) => console.log(error));
};
exports.deleteBook = async (req, res, next) => {
  bookModal.books.deleteBook(req.params.bookId).then(() => {
    res.redirect("/admin/books");
  });
};
exports.editBookPage = async (req, res, next) => {
  const editable = req.query.edit;
  const book = await bookModal.books.fetchBook(req.params.bookId);
  res.render("admin/add-book", {
    book: JSON.parse(book)[0],
    title: JSON.parse(book)[0].title,
    path: "/book",
    edit: !!editable,
  });
};
exports.editBook = (req, res) => {
  bookModal.books.editBook({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  res.redirect("/book-list");
};
