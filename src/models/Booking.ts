import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
   trip:{
    type:mongoose.Types.ObjectId,
      ref: "Trip",
    required:true
   },
   user:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:true
   },
},{
 timestamps:true
})

const Booking=mongoose.models.Booking|| mongoose.model("Booking",bookingSchema);
export default Booking;