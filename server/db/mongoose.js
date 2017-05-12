var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://buddycze:Studna123@ds127101.mlab.com:27101/todoapp");

module.exports = {
  mongoose
}
