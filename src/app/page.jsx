"use client";
import PageHeader from "./components/PageHeader";
import TodoForm from "./components/TodoSection";

const pageHeader = {
  title: "TODO APP",
  description: "blah",
};

export default function Home() {
  return (
    <>
      <PageHeader {...pageHeader} />
      <TodoForm />
    </>
  );
}
