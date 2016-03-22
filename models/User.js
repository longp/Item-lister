var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    require:true,
    unique:true
  },
  password: {
    type: String,
    require:true
  },
  funds: Number,
  items: {
    type : Schema.Types.ObjectId,
    ref: 'Item'
  }
});

var User = mongoose.model("User", userSchema);
module.exports = User;
