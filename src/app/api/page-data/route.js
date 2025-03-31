import { readItem } from "@directus/sdk";
import directus from "@/lib/directus";
import DOMPurify from "isomorphic-dompurify";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const pageData = await directus.request(readItem("pages", slug));

    if (!pageData) {
      return new Response(JSON.stringify({ error: "Page not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const sanitizedContent = DOMPurify.sanitize(pageData.content);

    const safePageData = {
      ...pageData,
      content: sanitizedContent,
    };

    return new Response(JSON.stringify({ data: safePageData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch page data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
