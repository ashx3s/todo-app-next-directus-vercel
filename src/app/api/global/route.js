import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function GET() {
  try {
    const global = await directus.request(readItems("global"));
    return Response.json(global);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "Failed to fetch global data" },
      { status: 500 }
    );
  }
}
