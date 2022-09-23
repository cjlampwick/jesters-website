const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({

  dateFrom: {
    type: Date,
    required: [true, "Please provide a date from!"],
    unique: false,
  },
  dateTo: {
    type: Date,
    required: [true, "Please provide a date to!"],
    unique: false,
  },
  userId:{
    type: mongoose.ObjectId,
    
    required: [true, ""],
    unique: false,
  }
  
})
module.exports = mongoose.model.Appointment || mongoose.model("Appointment", AppointmentSchema);

