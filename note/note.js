var mongoose = require('mongoose');  
var NoteSchema = new mongoose.Schema({  
  title: String,
  description: String,
  pinned: { type: Boolean, default: false }
});
module.exports = mongoose.model('Note', NoteSchema);