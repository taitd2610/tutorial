// Load module mongoose
var mongoose = require("mongoose");

// Connection URL. Địa chỉ mongodb server được chạy
var url = "mongodb://localhost:27017/testdb";

// Connect tới database sử dụng DB server URL.
mongoose.connect(url);

/**
 * Tạo  model, model này đại diện cho collection trong database.
 * Định nghĩa schema cho document trong xử lý này
 * */
var User = mongoose.model("User", { name: String, roles: Array, age: Number });

// Sử dụng model

// Tạo một user mới
var user1 = {
  name: "taitd",
  age: 42,
  roles: ["admin", "moderator", "user"],
};

// Convert tên sang uppercase
user1.name = user1.name.toUpperCase();
console.log(user1);

// Lưu document trong database
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log("saved successfully:", userObj);
  }
});
