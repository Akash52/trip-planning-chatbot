import React from 'react';

const data = [
  {
    id: 1,
    user: 'Hi',
    bot: 'Hello! How can I help you?',
  },
  {
    id: 2,
    user: 'Book Flight',
    bot: 'what date do you want me to book tickets for ?',
  },
  {
    id: 3,
    user: '20th May',
    bot: 'where are you flying from ?',
  },
  {
    id: 4,
    user: 'Rajkot',
    bot: 'Where are you flying to ?',
  },
  {
    id: 5,
    user: 'Bangalore',
    bot: 'Done! I will be booked your flight tickets to  flying from Rajkot to Bengaluru Happy Journey ',
  },
];

const roomData = [
  {
    id: 1,
    user: 'Book queen sized room in Banglore',
    bot: 'What date do yout want the room for?',
  },
  {
    id: 2,
    user: '20th May',
    bot: 'Done! Your booking for a queen in Bengaluru on 2022-05-20 is complete!',
  },
];

const carData = [
  {
    id: 1,
    user: 'Hi',
    bot: 'Greetings! How can I assist?',
  },
  {
    id: 2,
    user: 'Book Car',
    bot: 'Which city do you need this booking for?',
  },
  {
    id: 3,
    user: 'Bangalore',
    bot: 'What date do you need the car for?',
  },
  {
    id: 4,
    user: '20th May',
    bot: 'Waht kind of car do you want? I have sedans,convertibles,hatchbacks,SUvs and compacts.',
  },
  {
    id: 5,
    user: 'Sedan',
    bot: 'Done! Your booking for a sedan in Bangalore on 2022-05-20 is complete!',
  },
];

const About = () => {
  return (
    <>
      <div class='mx-auto px-4 sm:px-6 lg:px-8 mt-8'>
        <div class='max-w-lg flex justify-center items-center font-medium mx-auto p-2 bg-slate-200 shadow-md shadow-pink-500 rounded-lg'>
          <h1 className='text-4xl text-center text-slate-800'>User guide</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 ml-2 text-cyan-800'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
            />
          </svg>
        </div>
      </div>
      <div className='container grid pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        <div class=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
          <div class='max-w-3xl mx-auto  bg-gradient-to-r  shadow-lg shadow-blue-500 '>
            <h1 className='text-2xl py-2 font-medium text-center bg-slate-200 rounded-t-lg text-gray-800'>
              Book Flight Tickets
            </h1>
            {data.map((item) => (
              <div class='flex flex-col bg-white shadow-md  p-4'>
                <div class='flex items-center justify-between'>
                  <div class='flex-shrink-0'>
                    <div class='flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-3 w-0 flex-1 pt-0.5 font-medium text-sm text-gray-900'>
                    {item.user}
                  </div>
                </div>
                <div class='mt-2 flex-1 text-gray-600'>
                  <p class='text-sm font-normal leading-5 text-gray-900'>
                    {item.bot}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class='mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 mt-4'>
          <div class='max-w-3xl mx-auto  bg-gradient-to-r  shadow-lg shadow-blue-500 '>
            <h1 className='text-2xl py-2 font-medium text-center bg-slate-200 rounded-t-lg text-gray-800'>
              Book Room
            </h1>
            {roomData.map((item) => (
              <div class='flex flex-col bg-white shadow-md  p-4'>
                <div class='flex items-center justify-between'>
                  <div class='flex-shrink-0'>
                    <div class='flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-3 w-0 flex-1 pt-0.5 font-medium text-sm text-gray-900'>
                    {item.user}
                  </div>
                </div>
                <div class='mt-2 flex-1 text-gray-600'>
                  <p class='text-sm font-normal leading-5 text-gray-900'>
                    {item.bot}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div class='max-w-3xl mt-4 mx-auto  bg-gradient-to-r  shadow-lg shadow-blue-500 '>
            <h1 className='text-2xl py-2 font-medium text-center bg-slate-200 rounded-t-lg text-gray-800'>
              Book Car
            </h1>
            {carData.map((item) => (
              <div class='flex flex-col bg-white shadow-md  p-4'>
                <div class='flex items-center justify-between'>
                  <div class='flex-shrink-0'>
                    <div class='flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-3 w-0 flex-1 pt-0.5 font-medium text-sm text-gray-900'>
                    {item.user}
                  </div>
                </div>
                <div class='mt-2 flex-1 text-gray-600'>
                  <p class='text-sm font-normal leading-5 text-gray-900'>
                    {item.bot}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
