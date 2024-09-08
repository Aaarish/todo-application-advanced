import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TodoElement({ title, description, state }) {
    const [isTitleEditable, setIsTitleEditable] = useState(false)
    const [isDescEditable, setIsDescEditable] = useState(false)
    const [todoTitle, setTodoTitle] = useState(title)
    const [todoDesc, setTodoDesc] = useState(description)
    const [todoState, setTodoState] = useState(state)

    const switchTitleToEditable = () => {
        setIsTitleEditable(true)
    }

    const switchDescToEditable = () => {
        setIsDescEditable(true)
    }

    const handleKeyDown = (e, src) => {
        if (e.key === 'Enter' && src === 'title') {
            setIsTitleEditable(false)
        } else if (e.key === 'Enter' && src === 'desc') {
            setIsDescEditable(false)
        }
    }

    return (
        <div className="flex flex-col justify-center w-[600px] h-[170px] bg-white border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between items-center p-4 leading-normal">
                {isTitleEditable ? <input className='rounded-md' type="text" value={todoTitle} onChange={e => setTodoTitle(e.target.value)} onKeyDown={e => handleKeyDown(e, "title")} /> :
                    <button onClick={switchTitleToEditable}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{todoTitle}</h5>
                    </button>}
                {isDescEditable ? <input className='w-[600px] rounded-md' type="text" value={todoDesc} onChange={e => setTodoDesc(e.target.value)} onKeyDown={e => handleKeyDown(e, "desc")} /> :
                    <button onClick={switchDescToEditable}>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{todoDesc}</p>
                    </button>}
                {
                    todoState === "TODO" ? <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Start</button> :
                        <button className='bg-green-500 text-white px-4 py-2 rounded-md'>Complete</button>
                }
            </div>
        </div>
    )
}

export default TodoElement