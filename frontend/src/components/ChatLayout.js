import React, { useState } from 'react'
import axios from 'axios'
import Messages from './Messages'

const ChatLayout = ({ setShow }) => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }

    axios
      .post('https://chatbotusingdialogflow.herokuapp.com/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            response.data['message']['fulfillmentText'] !== ''
              ? response.data['message']['fulfillmentText']
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        }
        setResponses((responses) => [...responses, responseData])
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    }
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text)
      setCurrentMessage('')
    }
  }

  const handleClose = () => {
    setShow(true)
  }

  return (
    <>
      <div className="flex justify-end px-3 mx-auto">
        <div className="relative flex flex-col justify-between w-full h-auto max-w-5xl py-4 my-2 bg-gray-200 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
          <div className="absolute top-0 right-0" onClick={() => handleClose()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-4 overflow-y-auto scrolling-touch messagesSection scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
            <Messages messages={responses} />
          </div>

          <div className="flex justify-center px-3 py-2 border-t-2 border-gray-200 dark:border-gray-600 ">
            <div className="w-full px-2 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 lg:max-w-lg ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full py-2 pl-3 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-900 dark:text-white dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatLayout
