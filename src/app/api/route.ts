import connect from "../../../utils/db";


export async function GET(request: Request) {
  try {
    await connect();
    return new Response(JSON.stringify({ message: "Database connected successfully" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Database connection failed", err, success: false }), { status: 500 });
  }
}
