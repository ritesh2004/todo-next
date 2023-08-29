"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
    // const items = [{title: "Python", desc: "rtytnyjmyjm "}, {title: "Java", desc: "rtytnyjmyjm "}]
    const [items, setItems] = useState([])
    useEffect(() => {
        let todos = localStorage.getItem("todos")
        console.log(todos)
        setItems(JSON.parse(todos))
    }, [])

    const deleteItem = (title) => {
        let newTodo = items.filter((item) => {
            return (
                title !== item.title
            )
        })
        setItems(newTodo)
        localStorage.setItem("todos", JSON.stringify(newTodo))
    }
    return (
        <>
            <div className='text-2xl font-bold text-center mb-1'>Your ToDos</div>
            <div className='text-xl text-center my-5 text-zinc-500'>Your ToDos Will be appear here</div>
            <div className='flex flex-wrap -m-4 gap-5 mt-10'>
                {items?.map((item) => {
                    return (
                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                            <br />
                            <div className='absolute bottom-5 flex gap-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-trash' width="16" height="16" fill="red" viewBox="0 0 16 16" onClick={() => deleteItem(item.title)}>
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                                {/* <Link href={'/edit'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                                </Link> */}
                            </div>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export default page

