import { ReactSVG } from 'react-svg'
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
  background,
  extend,
  titleClassName,
  descClassName,
}) => {
  return (
    <div className={`flex flex-col my-40 md:flex-row bg-${background}-200 ${extend}`}>
      <div
        className={`w-full md:w-1/2 md:h-[630px] ${!imageOnRight
            ? 'order-last md:order-first'
            : 'order-last md:order-last'
          }`}
      >
        {image && (
          <img src={image} alt="" className="w-full h-full object-contain" />
        )}
      </div>
      <div
        className={`w-full p-4 md:w-1/2 ${!imageOnRight
            ? 'order-first md:order-last'
            : 'order-first md:order-first'
          } flex flex-col items-center justify-center`}
      >
        <h3
          className={`mb-10 text-center font-bold ${titleClassName} text-2xl `}
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
