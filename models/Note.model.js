var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function(val) {
    return (val.length > 0 && val != '(Select Name)');
  },
  'Select a validate member name'
]

var NoteSchema = new Schema({
  memberName: {
    type: String,
    validate: memberNameValidator
  },
  project: {
    type: String,
    required:true
  },
  workYesterday: {
    type: String,
    required: true
  },
  workToday: {
    type: String,
    required: true
  },
  impediment: {
    type: String,
    required: true,
    default: 'none'
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
