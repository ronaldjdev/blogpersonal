// @ts-nocheck

import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import portal2 from 'assets/images/portal2.png'
import { Form } from './Form'
import { Map } from 'components/Map/Map'
import { SocialMedia } from 'components/Social/SocialMedia/SocialMedia'

export const ContactForm = () => {
  return (
    <>
      <div
        className="rounded-3xl"
        style={{
          background: `url(${portal2})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      >
        <GlassFrame>
          <div className="flex gap-5">
            <div className="flex flex-col gap-5 items-center w-1/2">
              <SocialMedia/>
              <Map/>
            </div>
            <div className="flex w-1/2">
              <Form />
            </div>
          </div>
        </GlassFrame>
      </div>
    </>
  )
}
