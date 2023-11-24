import { useState } from 'react'
import { TfiArrowRight } from 'react-icons/tfi'
import { TfiArrowLeft } from 'react-icons/tfi'

export const Paginated = () => {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const data = ['1', '2', '3']

  const handleClick = number => {
    setSelectedNumber(number)
  }

  return (
    <>
      <div className="flex items-center gap-x-5 justify-center">
        <li className="flex bg-button items-center justify-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
          <span className="absolute flex items-center justify-center inset-0">
            <TfiArrowLeft />
          </span>
        </li>
        {data.map((counter, index) => (
          <li
            key={index}
            onClick={() => handleClick(counter)}
            className={`flex font-inter bg-button items-center justify-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full p-4 ${
              selectedNumber === counter
                ? 'bg-white text-rich-black font-bold'
                : ''
            }`}
          >
            <span className="absolute flex text-inherit items-center justify-center inset-0">
              {counter}
            </span>
          </li>
        ))}
        <li className="flex bg-button items-center justify-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
          <span className="absolute flex items-center justify-center inset-0">
            <TfiArrowRight />
          </span>
        </li>
      </div>
    </>
  )
}
