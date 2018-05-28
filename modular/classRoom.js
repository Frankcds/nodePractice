/**
 * Created by admin on 2017/10/11.
 */
var student = require('./student');
var teacher = require('./teacher');


function add(teacherName,students){
    teacher.add(teacherName);

    students.forEach(function(item,index){
        student.add(item);
    })
}
exports.add = add;