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
   status:{
    type:String,
    enum:["pending","confirmed","cancelled","refunded"],
    default: "pending"
   },
    seatNumber:[{
    type:Number,
    enum:["available","booked"],
    required:true
   }],
   bookingfare:{
type:Number
   }
   
   
},{
 timestamps:true
})

const Booking=mongoose.models.Booking|| mongoose.model("Booking",bookingSchema);
export default Booking;