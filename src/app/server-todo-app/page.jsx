import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import TodoListSWR from "../components/TodoListSWR";
// On this page, we want to fetch data server side that doesn't change much

// Fetch Page Data function

export default async function Page() {
  // data
  return (
    <>
      <header>
        <h1 className="text-2xl font-semibold">Server Side Page</h1>
        <p>
          In this example, we are loading the page SSR and then the dynamic
          stuff is loaded CSR.{" "}
          <strong>this header is static content written in JSX</strong>
        </p>
      </header>
      <section>
        <h2>
          The component below this heading is CSR to prioritize client
          interactions
        </h2>
        <TodoListSWR />
      </section>
      <section>{/* Data from directus */}</section>
    </>
  );
}
