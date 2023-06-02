import React from 'react'
import PropTypes from 'prop-types'

export const Title = ({ title, subtitle, size }) => {
  const customSize = 'text-xl md:text-5xl'
  return (
    <>
      <div className="flex flex-col items-center mx-auto">
        <h1
          className={`m-1 text- text-center md:leading-[5rem] ${
            size ? size : customSize
          }`}
        >
          <span className="bgText font-poppins font-semibold ">{title}</span>
        </h1>
        <h1 className="text-white text-center font-thin font-inter text- md:text-xl">
          {subtitle}
        </h1>
      </div>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  size: PropTypes.string,
}
