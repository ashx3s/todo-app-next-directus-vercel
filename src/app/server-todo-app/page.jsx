import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import TodoListSWR from "../components/TodoListSWR";
import DisplaySanitizedSection from "../components/DisplaySanitizedSection";
import DOMPurify from "isomorphic-dompurify";

export const revalidate = 3600;

export default async function Page() {
  const pageData = await directus.request(readItem("pages", "todoPage"));
  const sanitizedContent = await DOMPurify.sanitize(pageData.content);
  const data = { ...pageData, content: sanitizedContent };
  return (
    <>
      <header>
        <h1 className="text-2xl font-semibold">Server Side Page</h1>
        <p className="max-w-prose">
          In this example, we are loading the page SSR and then the dynamic
          stuff is loaded CSR.{" "}
          <strong>this header is static content written in JSX</strong>
        </p>
      </header>
      <section className="bg-pink-900 p-4 rounded-md my-8">
        <header>
          <h2 className="text-2xl font-semibold">SWR Component</h2>
          <p>
            The following list is a component that uses SWR to make a client
            side fetch to directus. However this text is static.
          </p>
        </header>
        <TodoListSWR />
      </section>
      <DisplaySanitizedSection sectionData={data} />
    </>
  );
}
