"use client";
import useSWR from "swr";
import TodoList from "../components/TodoList";
import fetcher from "@/utils/fetcher";

export default function TodoApp() {
  const { data: todos, error, isLoading } = useSWR("/api/todos", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos.</p>;
  if (!todos) return <p>No todos found</p>;

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
