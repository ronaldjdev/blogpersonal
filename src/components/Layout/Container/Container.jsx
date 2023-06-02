import React from 'react'
import PropTypes from 'prop-types'

export const Container = ({ children, pages }) => {
  const variant = pages
    ? 'mx-0'
    : 'mx-auto  max-w-screen-xl px-4 sm:px-6 lg:px-8'
  return (
    <div className={`${variant} flex flex-col justify-center w-full `}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.bool,
}
