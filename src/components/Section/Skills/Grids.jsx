import React from 'react'
// import PropTypes from "prop-types"
import { CardGrid } from 'components'
import { FaPython } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb'
// import { SiDjango } from 'react-icons/si'

export const Grids = () => {
  const dataLanguage = [
    { icon: <FaPython />, title: 'Python' },
    { icon: <TbBrandJavascript />, title: 'Javascript' },
    { icon: <TbBrandHtml5 />, title: 'Html5' },
    { icon: <TbBrandCss3 />, title: 'Css3' },
  ]
  // const dataFramework = [{ icon: <SiDjango />, title: 'Django' }]
  return (
    <>
      <div className="flex justify-center w-96">
        {dataLanguage.map(({ icon, title }) => (
          <div className="m-3" key={title}>
            <CardGrid icon={icon} title={title} />
          </div>
        ))}
      </div>
    </>
  )
}

// Grids.propTypes = {
//   data: PropTypes.array
// }
