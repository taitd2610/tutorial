// Import thư viện
var mongodb = require("mongodb");

// Sử dụng MongoClient để kết nối với máy chủ mongodb.
var mongoClient = mongodb.MongoClient;

// Connection URL. Địa chỉ mongodb server được chạy
var url = "mongodb://localhost:27017/";

// Connect tới server
mongoClient.connect(url, function (err, db) {
  // Nếu kết nối không thành công
  if (err) throw err;
  // Nếu thành công thì log ra thông báo
  console.log("Connection successful to URL: ", url);

  // Làm cái gì đó ở đây với database :D

  // Tạo db
  var dbo = db.db("mydb");
  // Tạo collection
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });

  dbo.createCollection("employees", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });

  // Tạo user
  var users = [
    {
      name: "taitd",
      age: 42,
      roles: ["admin", "moderator", "user"],
    },
    {
      name: "trangttq",
      age: 22,
      roles: ["user"],
    },
  ];

  // Thêm mới dữ liệu trong collection của database
  dbo.collection("employees").insertMany(users, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        'Inserted documents into the "employees" collection. The documents inserted with "_id" are:',
        result.length,
        result
      );
    }
  });

  // Đóng connection
  db.close();
});
