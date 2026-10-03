import redis from "@/lib/redis";


export async function GET() {
  await redis.set("name", "Hassan");

  const name = await redis.get("name");

  return Response.json({
    message: "Redis is working",
    name: name,
  });
}