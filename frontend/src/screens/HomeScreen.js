import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChatButton from '../components/ChatButton'
import ChatLayout from '../components/ChatLayout'

const images = [
  {
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    emoji: '😄',
  },
  {
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    emoji: '✈️',
  },
  {
    img: 'https://images.unsplash.com/photo-1529171696861-bac785a44828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
    emoji: '🚀',
  },
  {
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    emoji: '🔥',
  },
  {
    img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    emoji: '🌍',
  },
]

const HomeScreen = () => {
  const [slide, setSlide] = useState(0)
  const [show, setShowLayout] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (slide === images.length - 1 ? 0 : prev + 1))
      clearInterval(interval)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [slide])

  return (
    <>
      <div className="relative px-2 mt-0 sm:mt-4 xl:mt-4 lg:mt-4 md:mt-4">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative border-2 border-pink-400 shadow-xl sm:rounded-sm shadow-pink-500 sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src={images[slide].img}
                alt="slide"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Trip planning{' '}
                  <span className="animate-pulse"> {images[slide].emoji} </span>
                </span>
                <span className="flex justify-center mt-2 text-indigo-200">
                  chatBot
                </span>
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl">
                Here I will make a chatbot using Dialogflow, that helps users to
                plan a trip. From booking flight tickets to booking hotel rooms.
                It also provides functionality to book taxis to make their trip
                easy.
              </p>
              <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link
                    to="/"
                    className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mx-auto">
        {show ? (
          <ChatButton setShowLa={setShowLayout} />
        ) : (
          <ChatLayout setShow={setShowLayout} />
        )}
      </div>
    </>
  )
}

export default HomeScreen
