import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({ icon }) => {
  return (
    <>
      <a className={`bgGradient textFlux font-inter text-sm rounded-2xl `}>
        {icon} New: Language
      </a>
    </>
  )
}

Badge.propTypes = {
  icon: PropTypes.element.isRequired,
}