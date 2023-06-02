import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const NavItem = ({ to, label }) => {
  return (
    <>
      <li>
        <Link to={to}>
          <h3>{label}</h3>
        </Link>
      </li>
    </>
  )
}

NavItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string.isRequired,
}
