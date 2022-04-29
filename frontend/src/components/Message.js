import React from 'react'

const Message = ({ message }) => {
  return (
    <>
      {message.isBot ? (
        <div className="flex items-end justify-start">
          <div className="flex flex-col items-start order-2 max-w-xs m-1 mx-2 space-y-2 text-xs rounded-lg shadow-lg ">
            <span className="px-4 py-2 text-white bg-green-500 rounded-lg inl ine-block dark:bg-yellow-600 dark:text-white">
              {message.text}
            </span>
          </div>
          <i className="order-1 w-6 h-6 ml-2 rounded-full fas fa-desktop dark:text-white" />
        </div>
      ) : (
        <div className="flex items-end justify-end pt-2">
          <div className="flex flex-col items-end order-1 max-w-xs m-1 mx-2 space-y-2 text-xs rounded-lg shadow-lg ">
            <span className="inline-block px-4 py-2 text-white bg-indigo-500 rounded-lg dark:bg-blue-600 dark:text-white">
              {message.text}
            </span>
          </div>
          <i className="order-1 w-6 h-6 rounded-full fas fa-user dark:text-white" />
        </div>
      )}
    </>
  )
}

export default Message
