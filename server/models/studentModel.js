let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema({
    first_name: String,
    last_name: String,
    is_active: Boolean
});

let StudentModel = mongoose.model('student', studentSchema);

let insertStudent = (data) => {
    var student = new StudentModel (data);
    student.save(function (err) {if (err) console.log ('Error on save!')});
}

let getStudents = (onSuccess, onError) => {
    StudentModel.find({}).exec(function(err, result) {
        if (!err) {
            onSuccess(result);
          // handle result
        } else {
            onError();
          // error handling
        };
      });
  
}
module.exports = {
    insertStudent: insertStudent,
    getStudents: getStudents
}
