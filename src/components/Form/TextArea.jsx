import React from "react"
import PropTypes from 'prop-types'

export const TextArea = ({ name }) => (
  <>
    <div className="flex flex-col ">
      <label className="capitalize font-inter font-light m-3" htmlFor={name}>
        {name}:
      </label>
      <div className="relative ">
        <div className="starlight "> </div>
        <textarea
          className="bg-inherit border border-white-08 text-justify w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-4"
          name={name}
          id={name}
          cols={30}
          rows={10}
        ></textarea>
      </div>
    </div>
  </>
)

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
}