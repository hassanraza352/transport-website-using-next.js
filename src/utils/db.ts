import mongoose from "mongoose";



const URL = process.env.MONGODB_URI;


type MongooseCache={
  conn:typeof mongoose | null;
  promise:Promise<typeof mongoose> | null;
};

declare global{
var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache || {
    conn: null,
    promise: null,
};

global.mongooseCache = cached;


const connect = async () => {
    try {
        if (!URL) {
            throw new Error("MongoDB connection URL not found");
        }

          if (cached.conn) {
        console.log("Using existing MongoDB connection");
        return cached.conn;
    }
  
        if (!cached.promise) {
        cached.promise = mongoose.connect(URL);
    }

    cached.conn = await cached.promise;

    console.log("MongoDB connected successfully");

    return cached.conn;
  
  
  } catch (error) {
        console.log("MongoDB connection failed:", error);
        throw error;
    }
};

export default connect;
