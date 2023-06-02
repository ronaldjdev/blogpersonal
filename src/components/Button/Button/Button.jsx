import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Button = ({ text, onClick, custom, icon, link }) => {
  return (
    <>
      <Link to={link}>
        <button
          onClick={onClick}
          className={`flex py-2 px-5 h-[38px] w-auto m-0 items-center justify-center rounded-3xl border border-white-08 bg-white-02 font-inter uppercase tracking-widest font-bold text-sm ${custom} bg-button`}
        >
          <span className="text-inherit">
            {text}
            {icon}
          </span>
        </button>
      </Link>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  custom: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element,
}
