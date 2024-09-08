import React from 'react'
import { Link } from 'react-router-dom'
import TodoModal from './TodoModal'

function BaseElement({ children }) {
    const svg = <svg className="w-4 h-4 me-2 text-white group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
    </svg>

    return (
        <div className='w-full h-full bg-gray-200 relative'>
            <div className="border-b border-gray-200 dark:border-gray-700 w-full bg-gray-600 sticky top-0">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-white dark:text-gray-400">
                    <li id="today" className="me-2 hover:bg-gray-500 hover:bg-opacity-55">
                        <Link to="/" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300 group">
                            {svg}Today
                        </Link>
                    </li>
                    <li id="daily" className="me-2 hover:bg-gray-500 hover:bg-opacity-55">
                        <Link to="/daily" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300 group">
                            {svg}Daily
                        </Link>
                    </li>
                    <li id="weekly" className="me-2 hover:bg-gray-500 hover:bg-opacity-55">
                        <Link to="/weekly" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300 group">
                            {svg}Weekly
                        </Link>
                    </li>
                    <li id="monthly" className="me-2 hover:bg-gray-500 hover:bg-opacity-55">
                        <Link to="/monthly" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300 group">
                            {svg}Monthly
                        </Link>
                    </li>
                    <li id="occasional" className="me-2 hover:bg-gray-500 hover:bg-opacity-55">
                        <Link to="/occasional" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300 group">
                            {svg}Occasional
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
            <footer className='flex justify-center bg-gray-600 p-4 sticky bottom-0'>
                <TodoModal heading="Add Todo" />
            </footer>
        </div>

    )
}

export default BaseElement