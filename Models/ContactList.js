const mongoose  = require("mongoose")

const schema=mongoose.Schema
var User= new schema({
firstName:{
    type:String
},
lastName:{
    type:String
},
phoneNumber:{
    type:Number
},
email:{
    type:String
}


})
module.exports=mongoose.model("Users",User)