const mongoose= require('mongoose')

const EmployeeSchema = new mongoose.Schema({
   name:{
    type : String,
    required : true,
    minLength :[3,"Name should be greaterthan 3 characters"],
    maxLength :[30,"Name should be lessthan 30 characters"],
   },
   email:{
    type : String,
    required : true,
    unique : true,
   },
   password:{
    type : String,
    required : true,
    minLength :[6,"Password should be  greaterthan 6 characters"],

   }
})

module.exports = mongoose.model("employees", EmployeeSchema)

