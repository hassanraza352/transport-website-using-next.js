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
   driver:{
    type:mongoose.Types.ObjectId,
        ref:"Driver",
        required:true
  },

    departureDate:{
    type:Date,
    required:true
  },
    departureTime:{
    type:String,
    required:true
  },
  arrivalTime:{
    type:String,
    required:true
  },
  fare:{
    type:Number,
    required:true
  }
},{
  timestamps:true
})

const Trip=mongoose.models.Trip || mongoose.model("Trip",tripSchema)

export default Trip;

