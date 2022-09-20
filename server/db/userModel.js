const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema ({
    
fullName:{
  type: String,
  required: [true, "Please provide a Fullname!"],
  unique: false,
}  ,
email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
dateBirth: {
    type: Date,
    required: [true, "Please provide a date of birth!"],
    unique: false,
  },
dni: {
    type: Number,
    required: [true, "Please provide a DNI!"],
    unique: false,
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
})
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);


// module.exports = class User {
//     constructor({email, password}) {
//         this.email = email;
//         this.password = password;
//     }

//     async save(){
//         return this;
//     }

//     static async findOne({email}){
//         let u = new User({email: "juanchiniezequiel@gmail.com", password: "$2b$10$ZhJrDiag6K2tq/jWHRNI1u0H3pgnLR.4/oZfAYOREnFH40hG0CZxe"});

//         if(email == u.email)
//             return u;
//         else
//             return false;
//     }
// };