import mongoose from "mongoose";

const busrouteSchema=new mongoose.Schema({
  Routename:{
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

    RouteDirection:{
       type:String,
    required:true
  }

},{
 timestamps:true
})

const Busroute=mongoose.models.Busroute|| mongoose.model("Busroute",busrouteSchema);
export default Busroute;