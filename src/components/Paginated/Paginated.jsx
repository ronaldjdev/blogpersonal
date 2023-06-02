import React from "react"

export const Paginated = () => {
  const data = [
    "1", "2", "3"
  ]
  return (
    <>
      <div className="flex items-center gap-x-5 justify-center">
        {data.map((counter, index) => (
          <li key={index} className="flex items-center h-10 w-10 transition-all ease-in-out duration-100 relative rounded-full border p-4">
            <span className="absolute flex items-center justify-center inset-0">
              {counter}
            </span>
          </li>
        ))}
      </div>
    </>
  )
}
