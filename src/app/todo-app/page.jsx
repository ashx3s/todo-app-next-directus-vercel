import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
async function getTodos() {
  try {
    const todos = await directus.request(readItems("todos"));
    return todos;
  } catch (error) {
    console.error("Error", error);
  }
}
export default async function TodoApp() {
  const todos = await getTodos();
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
              <li key={todo.id} className='bg-gray-900 rounded-md p-4 my-2'>
                {todo.title}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
