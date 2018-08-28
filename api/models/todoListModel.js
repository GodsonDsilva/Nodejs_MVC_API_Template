var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({

    empId:{
        type:String,
        required:"Please Enter Employee ID"
    },
    name:{
        type:String,
        required:"Please Enter Employee Name"
    },

    dateOfJoining:{
        type:Date,
        default:Date.now
    },

    designation : {
        type:[{
            type:String,
            enum :['SoftwareDeveloper','Tester','HR'],

        }],
       
        default:['SoftwareDeveloper']
    }

}
);


module.exports = mongoose.model("Employee",EmployeeSchema)
