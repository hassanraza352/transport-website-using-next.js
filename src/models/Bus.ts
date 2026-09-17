import mongoose from "mongoose";

const busSchema=new mongoose.Schema({
  registrationNumber:{
    type:String,
    required:true
  },
   busModel:{
    type:String,
    required:true
  },
   totalSeat:{
    type:Number,
    required:true
  },
   coachType:{
    type:String,
    enum:["luxury","Executive","Sleeper"],
    required:true
  }

},{
 timestamps:true
})

const Bus=mongoose.models.Bus|| mongoose.model("Bus",busSchema);
export default Bus;