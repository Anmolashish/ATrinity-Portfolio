import { getSession } from "@/lib/session";

export async function GET(request) {
  const session = await getSession(request.cookies.get("session")?.value);

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ message: "Authenticated" }), {
    status: 200,
  });
}
