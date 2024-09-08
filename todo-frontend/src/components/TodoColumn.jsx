import React from 'react'
import TodoElement from './TodoElement'

function TodoColumn({ type }) {
    return (
        <div className='flex flex-col gap-6'>
            <div className='relative'>
                <h1 className='text-3xl font-bold text-center sticky'>{type}</h1>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    type === "TODO" ? <TodoElement title="Todo 1" description="something is still wrong" state="TODO" /> :
                        <TodoElement title="Todo 2" description="desc" state="DONE" />
                }
                {
                    type === "TODO" ? <TodoElement title="Todo 3" description="something is still wrong" state="TODO" /> :
                        <TodoElement title="Todo 4" description="desc" state="DONE" />
                }
                {
                    type === "TODO" ? <TodoElement title="Todo 5" description="something is still wrong" state="TODO" /> :
                        <TodoElement title="Todo 6" description="desc" state="DONE" />
                }
            </div>
        </div>
    )
}

export default TodoColumn