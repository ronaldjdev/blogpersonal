import { TfiArrowTopRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
interface Props {
  title: string
  description: string
  url: string
}
export const FeatureCardContent = ({ title, description, url }: Partial<Props>) => {
  return (
    <>
      <Link to={url ? url : '#'} className="flex p-9 w-full rounded-3xl bg-button-project">
        <div className="flex flex-col w-3/4">
          <h1 className="text-2xl uppercase tracking-widest font-poppins font-bold bgText">
            {title}
          </h1>
          <p className="font-light font-inter text-ellipsis my-3">
            {description}
          </p>
        </div>
        <div className="w-1/4 h-full flex flex-col items-end justify-start">
          <span className="flex flex-col items-center justify-center p-4 relative ">
            <TfiArrowTopRight className="text-2xl" />
            <TfiArrowTopRight className="text-2xl svg" />
          </span>
        </div>
      </Link>
    </>
  )
}
