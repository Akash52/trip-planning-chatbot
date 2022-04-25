import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="max-w-7xl top-0 sticky z-50 mx-auto px-2 sm:px-6 lg:px-8 mb-2">
        <nav className="z-50 text-center mx-auto font-medium text-gray-800 p-2 shadow-lg shadow-green-500    bg-slate-900 whitespace-nowrap">
          <div className="flex justify-between">
            <ul className="flex justify-center items-center text-center bg-gray-700 shadow-md  hover:bg-slate-600 rounded-xl p-4">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-pink-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="flex justify-center items-center text-center bg-gray-700 shadow-lg  hover:bg-gray-600 rounded-xl p-4">
              <li onClick={() => navigate('/')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2 cursor-pointer hover:text-slate-200 text-slate-200  transition duration-300 hover:scale-125"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  title="Home"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </li>
              <li onClick={() => navigate('/about')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-4 hover:text-slate-200 text-slate-200 rounded-lg transition duration-300 hover:scale-125"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
