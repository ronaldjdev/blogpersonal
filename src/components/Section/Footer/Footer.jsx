import { Bottombar } from "components/Navbar/Bottombar"
import { Brand } from "components/Navbar/Brand"

export const Footer = () => {
    return (

      <>
         <div className="flex p-10 border-t-[1px] ">
          <div className="w-1/2"><Brand/></div>
          <div className="w-1/2"><Bottombar/></div>
          <div className="w-1/2"><Bottombar/></div>
         </div>
      </>

    )
}