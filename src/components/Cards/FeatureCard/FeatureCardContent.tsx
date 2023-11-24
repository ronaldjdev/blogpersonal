import { TfiArrowTopRight } from 'react-icons/tfi'

interface Props {
  title: string
  description: string
}
export const FeatureCardContent = ({ title, description }: Partial<Props>) => {
  return (
    <>
      <div className="flex p-3 w-full overflow-hidden rounded-3xl">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl uppercase tracking-widest font-poppins font-bold bgText">
            {title}
          </h1>
          <p className="font-light font-inter text-ellipsis my-3">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <TfiArrowTopRight className="text-3xl" />
        </div>
      </div>
    </>
  )
}
