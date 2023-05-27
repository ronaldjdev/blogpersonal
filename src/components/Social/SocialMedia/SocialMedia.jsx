import { FaGithubAlt, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export const SocialMedia = () => {
  return (

    <>
      <div>
        <div className="flex gap-5">
          <div className="flex">
            <FaGithubAlt className="hover:fill-[#FFB6C1]" />
          </div>
          <div className="flex">
            <FaLinkedin />
          </div>
          <div className="flex" title="ronaldjdevfs@gmail.com" >
            <SiGmail />
          </div>
          <div className="flex">
            <SiGmail />
          </div>
        </div>
      </div>

    </>

  )
}