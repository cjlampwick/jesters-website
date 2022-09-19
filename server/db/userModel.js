const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema ({
    
email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
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