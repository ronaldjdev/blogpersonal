import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import { Bottombar } from 'components/Navbar/Bottombar'
import { Brand } from 'components/Navbar/Brand'
import pulse from 'assets/videos/pulse.webm'

export const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <div className=" w-full z-50 ">
          <GlassFrame>
            <div className="flex p-10 ">
              <div className="w-1/2">
                <Brand />
              </div>
              <div className="w-1/2">
                <Bottombar />
              </div>
            </div>
          </GlassFrame>
          <div className="font-inter text-sm font-light m-3 flex justify-center">
            <p>
              desing by:&nbsp;
            </p>
            <span className="font-bold bgText"> ronaldjdev </span>
          </div>
        </div>
        <div className="absolute z-0 w-full object-cover">

        <video className="w-full object-fill  " autoPlay loop src={pulse} />
        </div>
      </div>
    </>
  )
}
