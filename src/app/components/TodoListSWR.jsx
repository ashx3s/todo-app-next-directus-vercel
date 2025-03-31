"use client";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TodoListSWR() {
  const { data: todos, error, isLoading } = useSWR("/api/todos", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos.</p>;
  if (!todos) return <p>No todos found</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
