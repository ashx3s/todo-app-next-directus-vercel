"use client";
import useSWR from "swr";
import TodoList from "../components/TodoList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const initialTodos = [
  {
    id: 1,
    title: "Blah todo fallback",
    description: "we don't want to use this",
  },
];
export default function TodoApp() {
  const { data: todos, mutate } = useSWR("/api/todos", fetcher, {
    fallbackData: initialTodos,
  });

  console.log(todos);
  return (
    <>
      <header>
        <h1>Hello USERNAME!</h1>
        <p>
          Move the UI for the todo app here after setting it up in the home page
        </p>
      </header>
      <TodoList todos={todos} />
    </>
  );
}
