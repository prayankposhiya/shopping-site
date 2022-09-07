const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Prayank_Poshiya:liI3kBYGfXffGsnh@cluster0.4ic41kg.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db();
    })
    .catch((error) => console.log(error));
};
const getDb = () => {
  if (_db) {
    return _db;
  }
};

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
