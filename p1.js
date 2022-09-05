const express = require("express");
const { sequelize } = require("./database/database");
const { Book } = require("./model/bookModal");
const { UsersData } = require("./model/userModal");
const fs = require("fs");
const parser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
const app = express({ extends: false });
sequelize.sync();
Book.belongsTo(UsersData, { constraints: true, onDelete: "CASCADE" });
app.set("view engine", "ejs");
app.use(parser.urlencoded());
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res) => {
  res.status(404).send("You have end up with wrong URL");
});
app.listen(3000);
