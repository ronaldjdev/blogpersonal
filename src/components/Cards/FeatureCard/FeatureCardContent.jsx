import React from "react";
import PropTypes from "prop-types";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const FeatureCardContent = ({ title, description }) => {
  return (

    <>
      <div className="flex p-3 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl uppercase tracking-widest font-poppins font-bold bgText">{title}</h1>
          <p className="font-light font-inter text-ellipsis my-3">{description}</p>
        </div>
        <div className="flex flex-col">
          <FaArrowAltCircleRight />
        </div>
      </div>
    </>

  )
}

FeatureCardContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}