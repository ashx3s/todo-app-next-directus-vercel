"use client";
import { useState } from "react";
/* utility functions
- TODO: Clean up input with trim
- TODO: Clear input after adding
*/

/*  Functions
- create new todo
- delete todo
- check off todo
*/

export default function Home() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Sample Title 1",
      description: "Doing stuff to finish this task",
      checked: false,
    },
    {
      id: 2,
      title: "Sample Title 2",
      description: "Doing stuff to finish this task",
      checked: true,
    },
    {
      id: 3,
      title: "Sample Title 3",
      description: "Doing stuff to finish this task",
      checked: false,
    },
  ]);
  function handleSubmit(el) {
    el.preventDefault();
    const title = el.target.title.value;
    const description = el.target.description.value;
    if (title) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          title,
          description,
          checked: false,
        },
      ]);
      el.target.reset();
    }
  }
  function handleToggle(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  function handleDelete(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <header className='my-4'>
        <h1 className='text-5xl font-semibold'>TODO App</h1>
        <p>Login to use our fantastic task organizing app</p>
      </header>
      <section className='container my-6'>
        <h2 className='text-3xl font-semibold'>TODO Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label htmlFor='title' className='text-lg font-bold'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='enter task'
              className='block bg-gray-900 p-2 rounded-md my-2'
              required
            />
          </div>
          <div className='my-4'>
            <label htmlFor='description' className='text-lg font-bold'>
              Description (optional)
            </label>
            <input
              type='textarea'
              id='description'
              name='description'
              placeholder='enter extra details'
              className='block bg-gray-900 p-6 rounded-md my-2'
            />
          </div>
          <input
            type='submit'
            value='Add'
            className='bg-blue-400 rounded-lg px-6 py-2 my-4'
          />
        </form>
      </section>
      <section className='container my-6'>
        <h2 className='text-3xl font-semibold'>Show TODO Items</h2>
        <ul>
          {todoList
            .filter((todo) => !todo.checked)
            .map((item) => (
              <li key={item.id} className='bg-gray-900 p-4 rounded-md my-4'>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleToggle(item.id)}
                />
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p>{item.description}</p>
                <div className='flex gap-2 my-2'>
                  <button
                    className='px-3 py-2 rounded-lg bg-red-500'
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <section className='container my-6'>
        <h2 className='text-3xl font-semibold'>Completed Items</h2>
        {todoList.filter((todo) => todo.checked).length > 0 ? (
          todoList
            .filter((todo) => todo.checked)
            .map((completedItem) => {
              return (
                <li key={completedItem.id} className='text-gray-500 p-4'>
                  <input
                    type='checkbox'
                    checked={completedItem.checked}
                    onChange={() => handleToggle(completedItem.id)}
                  />
                  <h3 className='line-through'>{completedItem.title}</h3>
                </li>
              );
            })
        ) : (
          <span>No Items</span>
        )}
      </section>
    </>
  );
}
