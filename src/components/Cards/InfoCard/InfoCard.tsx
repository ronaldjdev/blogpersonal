import { ReactSVG } from 'react-svg'
import circles from 'assets/svg/css-gradient-examples.svg'
import fade from 'assets/images/fade.png'

interface Props {
  image: string
  title: string
  description: string
  imageOnRight: boolean
  background: string
  extend: string
  titleClassName: string
  descClassName: string
  svg: string
}
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
  background,
  extend,
  titleClassName,
  descClassName,
  svg,
}: Partial<Props>) => {
  return (
    <div className={`flex flex-col md:flex-row bg-${background}-200 ${extend}`}>
      <div
        className={`w-full flex flex-col justify-center items-center relative md:w-1/2 md:h-[630px] ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-last md:order-last'
        }`}
      >
        {(image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 m-auto mx-auto h-80 w-auto "
          />
        )) ||
          (svg && (
            <ReactSVG
              src={svg}
              className="absolute inset-0 m-auto mx-auto h-80 w-auto"
            />
          ))}
        <img src={fade} alt="" className="w-full h-full object-contain" />
      </div>
      <div
        className={`w-full p-4 md:w-1/2 ${
          !imageOnRight
            ? 'order-first md:order-last'
            : 'order-first md:order-first'
        } flex flex-col items-center justify-center relative`}
      >
        <div className="absolute z-0 blur-[60px] opacity-20">
          <ReactSVG src={circles} />
        </div>
        <h3
          className={`mb-10 text-center z-50 font-bold ${titleClassName} text-2xl `}
        >
          <span className="bgText font-poppins font-semibold ">{title}</span>
        </h3>
        <p className={`${descClassName} text-justify font-inter font-thin`}>
          {description}
        </p>
      </div>
    </div>
  )
}
