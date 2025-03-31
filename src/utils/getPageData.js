export default async function getPageData(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const apiUrl = `${baseUrl}/api/page-data?slug=${slug}`;
  try {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch page data: ${res.status} ${res.statusText}`
      );
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Page Data Fetch Error", error);
  }
}
