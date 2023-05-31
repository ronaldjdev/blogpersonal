import React from "react"
import PropTypes from "prop-types"

export const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}