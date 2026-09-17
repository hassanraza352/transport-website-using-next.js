import mongoose from "mongoose";

const busrouteSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
   startLocation:{
    type:String,
    required:true
  },
   endLocation:{
    type:String,
    required:true
  },
   BusType:{
    type:String,
    enum:["luxury","Executive","Sleeper"],
    required:true
  }

},{
 timestamps:true
})

const Busroute=mongoose.models.Busroute|| mongoose.model("Busroute",busrouteSchema);
export default Busroute;