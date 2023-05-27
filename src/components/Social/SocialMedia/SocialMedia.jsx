import { FaGithubAlt, FaLinkedin,FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { RiWhatsappFill } from "react-icons/ri"

export const SocialMedia = () => {
  return (

    <>
      <div>
        <div className="flex gap-5">
          <div className="flex">
            <a href="http://github.com/ronaldjdev" target="_blank" rel="noopener noreferrer">

              <FaGithubAlt className="hover:fill-[#FFB6C1]" />
            </a>
          </div>
          <div className="flex">
            <a href="http://linkedin.com/in/ronaldjdev" target="_blank" rel="noopener noreferrer">

            <FaLinkedin />
            </a>
          </div>
          <div className="flex" title="ronaldjdevfs@gmail.com" >
            <a href="mailto:eronald2009@gmail.com">

            <SiGmail />
            </a>
          </div>
          <div className="flex">
            
            <RiWhatsappFill  />
          </div>
        </div>
      </div>

    </>

  )
}