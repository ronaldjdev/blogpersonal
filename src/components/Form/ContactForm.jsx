import React from 'react'
// @ts-ignore
import pulse from 'assets/videos/pulse.webm'
import { GlassFrame, Form, Map, SocialMedia, Title } from 'components'


export const ContactForm = () => {
  return (
    <>
      <div
        className="rounded-3xl w-full flex items-center justify-center relative"
      // style={{
      //   background: `url(${portal2})`,
      //   backgroundPosition: 'bottom',
      //   backgroundSize: 'cover',
      // }}
      >
        <div className="flex items-center absolute z-0 w-full inset-6 object-cover">
          <video className="w-full object-fill  " autoPlay loop src={pulse} />
        </div>
        <div className="w-full z-50">
          <GlassFrame>
            <div className="flex gap-5">
              <div className="flex flex-col gap-5 items-center w-1/2">
                <Title title="Social Media" size="text-2xl"  />
                <SocialMedia />
                <Title title="Direccion" size="text-2xl" />
                <Map />
              </div>
              <div className="flex w-1/2">
                <Form />
              </div>
            </div>
          </GlassFrame>
        </div>
      </div>
    </>
  )
}
