const express = require("express");
// const { sequelize } = require("./database/database");
const mongoConnect = require("./database/database");
const fs = require("fs");
const parser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
const app = express({ extends: false });
app.set("view engine", "ejs");
app.use(parser.urlencoded());
// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
app.use((req, res) => {
  res.status(404).send("You have end up with wrong URL");
});
mongoConnect((client) => {
  app.listen(3000);
});
