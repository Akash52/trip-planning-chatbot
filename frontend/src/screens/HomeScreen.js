import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  {
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1529171696861-bac785a44828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
];

const HomeScreen = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (slide === images.length - 1 ? 0 : prev + 1));
      clearInterval(interval);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <div className='relative mt-0 sm:mt-4 xl:mt-4 lg:mt-4 md:mt-4 px-2'>
      <div className='absolute inset-x-0 bottom-0 h-1/2' />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:rounded-sm shadow-pink-400 border-2 border-gray-400 sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full object-cover'
              src={images[slide].img}
              alt='slide'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block text-white'>Trip planning ✈️</span>
              <span className='flex justify-center text-indigo-200 mt-2'>
                chatBot
              </span>
            </h1>
            <p className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
              Here I will make a chatbot using Dialogflow, that helps users to
              plan a trip. From booking flight tickets to booking hotel rooms.
              It also provides functionality to book taxis to make their trip
              easy.
            </p>
            <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
              <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                <Link
                  to='/'
                  className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'
                >
                  Get started
                </Link>
                <Link
                  to='/'
                  className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 animate-bounce absolute block bottom-0 right-0 left-0  mx-auto rounded-full   shadow-2xl text-indigo-200 cursor-pointer'
        viewBox='0 0 20 20'
        fill='currentColor '
      >
        <path
          fillRule='evenodd'
          d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};

export default HomeScreen;