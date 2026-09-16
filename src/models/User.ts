
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
    email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
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
    enum:["admin","user","driver"],
    default:"user"
  }
},{
  timestamps:true
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

