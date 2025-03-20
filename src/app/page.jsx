"use client";
import { useState } from "react";
/* utility functions
- TODO: Clean up input with trim
- TODO: Clear input after adding
*/

/*  ACTIONS
- create new todo
- delete todo
- edit todo
- check off todo (second list)
*/

export default function Home() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Sample Title 1",
      description: "Doing stuff to finish this task",
    },
    {
      id: 2,
      title: "Sample Title 2",
      description: "Doing stuff to finish this task",
    },
    {
      id: 3,
      title: "Sample Title 3",
      description: "Doing stuff to finish this task",
    },
  ]);
  const [completedTodos, setCompletedTodos] = useState([
    {
      id: 5,
      title: "Sample Title 5",
      description: "Doing stuff to finish this task",
    },
  ]);
  return (
    <>
      <header className='my-4'>
        <h1 className='text-5xl font-semibold'>TODO App</h1>
        <p>Login to use our fantastic task organizing app</p>
      </header>
      <section className='container my-6'>
        <h2 className='text-3xl font-semibold'>TODO Form</h2>
        <form action=''>
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
          {todoList.length > 0 ? (
            todoList.map((item) => {
              return (
                <li key={item.id} className='bg-gray-900 p-4 rounded-md my-4'>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              );
            })
          ) : (
            <span>No items</span>
          )}
        </ul>
      </section>
      <section className='container my-6'>
        <h2 className='text-3xl font-semibold'>Completed Items</h2>
        {completedTodos.length > 0 ? (
          completedTodos.map((completedItem, index) => {
            return (
              <li key={index} className='text-gray-500 p-4'>
                <h3 className='line-through'>{completedItem.title}</h3>
              </li>
            );
          })
        ) : (
          <li>"no items"</li>
        )}
      </section>
    </>
  );
}
