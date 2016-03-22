var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema ({
  name: String,
  price: Number,
  comment:[{
    type: String, ref: "User"
  }],
  Owner: [{
    type:Schema.Types.ObjectId, ref: "User"
  }]
})

 var Item = mongoose.model("Item", itemSchema);
 module.exports = Item;
