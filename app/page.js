"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [todo, setTodo] = useState({ title: "", desc: "" })
  const [added, setAdded] = useState(false)

  const addTodo = (e) => {
    e.preventDefault()
    const todos = localStorage.getItem('todos')
    if (todos) {
      let todoJson = JSON.parse(todos)
      if (todoJson.filter((array) => { return array.title === todo.title }).length > 0) {
        alert("Title in this todo already present!")
      } else {
        todoJson.push(todo)
        localStorage.setItem("todos", JSON.stringify(todoJson))
        alert("ToDo added successfully!")
        setTodo({ title: "", desc: "" })
        // setAdded(false)
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]))
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form className='w-1/2 container mx-auto mt-20 rounded-lg shadow-2xl p-10'>
        <div className='container mx-auto text-center my-5 text-2xl text-blue-500 font-bold'>ToDo</div>
        <div class="mb-6">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ToDo Title</label>
          <input type="text" name='title' id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ToDo title" value={todo.title} onChange={handleForm} required />
        </div>
        <div class="mb-6">
          <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ToDo Description</label>
          <textarea type="text" name='desc' id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={todo.desc} onChange={handleForm} required />
        </div>
        {added ? <span className='text-green-500'>Added successfully</span> : <span></span>}
        <br />
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addTodo}>Add ToDo</button>
      </form>
    </>
  )
}

