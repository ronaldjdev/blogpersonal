import React from 'react'
import { FeatureCardContent } from './FeatureCardContent'

export const FeatureCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 gap-3">
        <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=""className='w-full h-80  object-cover'/>
        </div>
        <div className="flex border border-white-08 rounded-3xl p-6 w-full">
          <FeatureCardContent title="Empli" description="lorem ipsum is morten calgariuidsfhusdkfghas hsedgfjsdgfjksd."/>
        </div>
      </div>
    </>
  )
}
