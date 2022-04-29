import React from 'react'

const ChatButton = ({ setShowLa }) => {
  const [show, setShow] = React.useState(true)
  const [show2, setShow2] = React.useState(true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [show])

  const handleClick = () => {
    setShow(false)
  }

  const handleClick2 = () => {
    setShow2(false)
  }

  const handleClose = () => {
    setShowLa(false)
  }

  return (
    <>
      {show2 && (
        <div className="relative">
          <img
            className="block object-cover w-24 h-24 m-2 transition border-4 border-green-600 rounded-full shadow-2xl cursor-pointer duration-400 shadow-blue-500 hover:ring-4 hover:opacity-95 hover:ring-emerald-500"
            src="https://sprcdn-assets.sprinklr.com/124/8e030a8c-2638-4580-9d25-6dcca1790fe4-731817086.png"
            alt="avatar"
            onClick={() => handleClose()}
          />

          <div className="absolute top-0 right-0 -translate-x-3 -translate-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block w-5 h-5 text-blue-200 transition duration-300 cursor-pointer hover:text-yellow-300 hover:scale-125"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => handleClick2()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      )}

      {show && (
        <>
          <div className="absolute top-0 left-0 mx-auto mr-4 -translate-x-24 translate-y-7 ">
            <p className="px-4 py-2 text-xs font-medium rounded-md bg-slate-100">
              Need help? Talk to ChatBot!
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 block w-5 h-5 text-gray-800 transition duration-300 -translate-x-5 -translate-y-5 cursor-pointer hover:text-blue-600 hover:scale-125"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => handleClick()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </>
      )}
    </>
  )
}

export default ChatButton
