// This file fetches the data server side
import { notFound } from "next/navigation";
import Link from "next/link";
import DOMPurify from "dompurify";
import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";

async function getPage(slug) {
  try {
    const page = await directus.request(readItem("pages", slug));
    return page;
  } catch (error) {
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);
  if (!page) {
    return (
      <section>
        <p className="text-2xl font-semibold text-gray-200">
          Error loading home page content
        </p>
        <Link
          href="/"
          className="block px-4 py-2 rounded-full bg-blue-700 dark:bg-blue-600 max-w-fit my-4 hover:dark:bg-blue-700 hover:bg-blue-900 transition duration-150 ease-linear"
        >
          Take Me Home
        </Link>
      </section>
    );
  }
  const sanitizedHtml = DOMPurify.sanitize(page.content);
  return (
    <>
      <div>{page.title}</div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
    </>
  );
}
