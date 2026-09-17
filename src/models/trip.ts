import mongoose from "mongoose";
 
const tripSchema=new mongoose.Schema({
  bus:{
    type:mongoose.Types.ObjectId,
    ref:"Bus",
    required:true
  },
   route:{
    type:mongoose.Types.ObjectId,
        ref:"Busroute",
        required:true
  },
    departureDate:{
    type:String,
    required:true
  },
    departureTime:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

const Trip=mongoose.models.Trip || mongoose.model("Trip",tripSchema)

export default Trip;

