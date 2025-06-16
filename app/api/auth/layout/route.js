import { deleteSession } from "@/lib/session";

export async function POST(request) {
  const sessionToken = request.cookies.get("session")?.value;

  if (sessionToken) {
    await deleteSession(sessionToken);
  }

  const response = new Response(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200 }
  );

  // Clear cookie
  response.cookies.delete("session");

  return response;
}
