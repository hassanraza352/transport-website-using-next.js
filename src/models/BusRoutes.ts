import mongoose from "mongoose";

const busrouteSchema=new mongoose.Schema({
  Routename:{
    type:String,
    required:true
  },
   startLocation:{
    type:String,
    required:true,
    trim:true
  },
   endLocation:{
    type:String,
    required:true,
    trim:true
  },

    RouteDirection:{
       type:String,
    required:true,
    trim:true
  }

},{
 timestamps:true
})

const Busroute=mongoose.models.Busroute|| mongoose.model("Busroute",busrouteSchema);
export default Busroute;