import Link from "next/link";
import getPageData from "@/utils/getPageData";
import DisplaySanitizedSection from "../components/DisplaySanitizedSection";

export default async function DynamicPage({ params }) {
  const pageData = await getPageData(params.slug);
  if (!pageData) {
    return (
      <section>
        <p className="text-2xl font-semibold text-gray-200">
          Error loading {pageData.slug || params.slug} page content
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
  return (
    <DisplaySanitizedSection sectionData={pageData} bgColor="bg-orange-900" />
  );
}
