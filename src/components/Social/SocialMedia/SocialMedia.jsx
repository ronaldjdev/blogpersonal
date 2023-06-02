import React from 'react'
import { Tooltip } from 'react-tooltip'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiWhatsappFill } from 'react-icons/ri'

export const SocialMedia = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex">
            <a
              href="http://github.com/ronaldjdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt
                data-tooltip-id="github"
                data-tooltip-content="Github: ronaldjdev"
                className="text-4xl bgText hover:fill-[#FAD000]  transition-colors duration-300"
              />
              <Tooltip className="first-line:" id="github" />
            </a>
          </div>
          <div className="flex">
            <a
              href="http://linkedin.com/in/ronaldjdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                data-tooltip-id="linkedin"
                data-tooltip-content="Linkedin: ronaldjdev"
                className="text-4xl bgText hover:fill-[#0A66C2]  transition-colors duration-300"
              />
              <Tooltip className="first-line:" id="linkedin" />
            </a>
          </div>
          <div className="flex" title="ronaldjdevfs@gmail.com">
            <a href="mailto:eronald2009@gmail.com">
              <SiGmail
                data-tooltip-id="gmail"
                data-tooltip-content="Gmail: ronaldjdevfs@gmail.com"
                className="text-4xl hover:fill-[#EA4335]  transition-colors duration-300"
              />
              <Tooltip className="first-line:" id="gmail" />
            </a>
          </div>
          <div className="flex">
            <a
              href="http://api.whatsapp.com/send?phone=573024551445"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill
                data-tooltip-id="whatsapp"
                data-tooltip-content="Wpp: +57 3024551445"
                className="text-4xl hover:fill-[#25D366]  transition-colors duration-300"
              />
              <Tooltip className="first-line:" id="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
