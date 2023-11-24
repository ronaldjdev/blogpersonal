import { FeatureCardContent } from './FeatureCardContent'

interface Props {
  image: string
  title: string
  description: string
}
export const FeatureCard = ({ image, title, description }: Partial<Props>) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 gap-3">
        <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl">
          <img src={image} alt="" className="w-full h-80 zoom  object-cover" />
        </div>
        <div className="flex border border-white-08 rounded-3xl p-6 w-full">
          <FeatureCardContent title={title} description={description} />
        </div>
      </div>
    </>
  )
}
