import Redis from "ioredis";

const redis = new Redis("redis://redis:6379");

redis.on("connect", () => {
  console.log("Redis connected successfully");
});

redis.on("error", (error) => {
  console.error("Redis connection error:", error);
});

export default redis;