const { sequelize, DataTypes } = require("../database/database");
const UsersData = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  email: DataTypes.STRING,
  username: DataTypes.STRING,
});

module.exports.user = class User {
  constructor(user) {
    this.user = user;
  }
  save() {
    return UsersData.create(this.user);
  }
};
module.exports.UsersData = UsersData;
