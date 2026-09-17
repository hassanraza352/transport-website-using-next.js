
import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
    cnicNO:{
    type:String,
    required:true,
    unique:true
  },
  LicenseNO:{
    type:String,
    required:true,
    unique:true
  },
  profilePic:{
    type:String,
    default:" "
  },
  phoneNO:{
 type:String,
    default:"+92xxxxxxxxx "
  },
  role:{
    type:String,
    enum:["driver"],
  }
},{
  timestamps:true
})

const Driver = mongoose.models.Driver || mongoose.model("Driver", driverSchema);

export default Driver;

