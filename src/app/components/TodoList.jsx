export default function TodoList({ todos }) {
  return (
    <section>
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
  );
}
