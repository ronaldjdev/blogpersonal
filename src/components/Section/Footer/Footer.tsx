import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import { Bottombar } from 'components/Bar/Navbar/Bottombar'
import { Brand } from 'components/Bar/Navbar/Brand'
import portal2 from 'assets/images/portal2.png'

export const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <div
          className=" w-full rounded-3xl"
          style={{
            background: `url(${portal2})`,
            backgroundPosition: 'bottom -105px center',
            backgroundSize: 'cover',
          }}
        >
          <GlassFrame>
            <div className="flex flex-col justify-center items-center">
              <Brand />
              <Bottombar />
            </div>
            <div className="font-inter text-sm font-light m-3 flex justify-center">
              <p>desing by:&nbsp;</p>
              <span className="font-bold bgText"> ronaldjdev </span>
            </div>
          </GlassFrame>
        </div>
      </div>
    </>
  )
}
