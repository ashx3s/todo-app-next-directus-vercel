import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function GET() {
  try {
    const todos = await directus.request(readItems("todos"));
    return Response.json(todos);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}
