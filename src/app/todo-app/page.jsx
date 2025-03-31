import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
export const revalidate = 3600; // revalidate the data at most every hour

async function getTodos() {
  try {
    const todos = await directus.request(readItems("todos"));
    if (!todos) {
      throw new Error("Directus returned empty or invalid data");
    }
    return todos;
  } catch (error) {
    console.error("Data Fetch Error", error);
    return [];
  }
}
export default async function DynamicPage() {
  const todos = await getTodos();
  console.log(todos);
  if (!todos || todos.length === 0) {
    return (
      <>
        <h1>Hello</h1>
        <p>No todos found</p>
      </>
    );
  }
  console.log(todos);
  return (
    <>
      <header>
        <h1>Hello USERNAME!</h1>
        <p>
          Move the UI for the todo app here after setting it up in the home page
        </p>
      </header>
      <section>
        {/* TODO: ADD todo interface here */}
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="bg-gray-900 rounded-md p-4 my-2">
                {todo.title}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
