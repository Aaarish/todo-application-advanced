import React from 'react'
import TodoColumn from './TodoColumn' 

function TodoGrid() {
  return (
    <div className='m-6 flex gap-10 justify-center items-center'>
      <TodoColumn type="DONE" />
      <TodoColumn type="TODO" />
    </div>
  )
}

export default TodoGrid