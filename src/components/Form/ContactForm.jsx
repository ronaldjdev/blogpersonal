// @ts-nocheck
import pulse from 'assets/videos/pulse.webm'
import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import portal2 from 'assets/images/portal2.png'
import { Form } from './Form'
import { Map } from 'components/Map/Map'
import { SocialMedia } from 'components/Social/SocialMedia/SocialMedia'
import { Title } from 'components/Section/Title/Title'

export const ContactForm = () => {
  return (
    <>
      <div
        className="rounded-3xl w-full relative"
      // style={{
      //   background: `url(${portal2})`,
      //   backgroundPosition: 'bottom',
      //   backgroundSize: 'cover',
      // }}
      >
        <div className="flex items-center absolute z-0 w-auto inset-6 object-cover">
          <video className="w- object-fill  " autoPlay loop src={pulse} />
        </div>
        <div className="z-50">        
        <GlassFrame>
          <div className="flex gap-5">
            <div className="flex flex-col gap-5 items-center w-1/2">
              <Title title="Social Media" size="text-2xl" />
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
