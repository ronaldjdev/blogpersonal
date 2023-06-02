import React from "react"
import { TfiArrowRight } from 'react-icons/tfi'
import { TfiArrowLeft } from 'react-icons/tfi'

export const Paginated = () => {
  const data = [
    "1", "2", "3"
  ]
  return (
    <>
      <div className="flex items-center gap-x-5 justify-center">
        <li className="flex bg-button  items-center justify-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
          <span className="absolute flex items-center justify-center inset-0">
            <TfiArrowLeft/>
          </span>
        </li>
        {data.map((counter, index) => (
          <li key={index} className="flex  bg-button items-center justify-canter h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
            <span className="absolute flex items-center justify-center inset-0">
              {counter}
            </span>
          </li>
        ))}
      <li className="flex  bg-button items-center justify-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
          <span className="absolute flex items-center justify-center inset-0">
            <TfiArrowRight/>
        </span>
      </li>
      </div>
    </>
  )
}
