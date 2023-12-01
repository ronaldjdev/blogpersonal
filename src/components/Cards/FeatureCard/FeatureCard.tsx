import { FeatureCardContent } from './FeatureCardContent'
import { Link } from 'react-router-dom'

interface Props {
  image: string;
  title: string;
  description: string;
  url: string;
}
export const FeatureCard = ({ image, title, description, url }: Partial<Props>) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 gap-3">
          <Link to="/proyectos" className="flex items-center justify-center w-full overflow-hidden rounded-3xl">
            <img src={image} alt="" className="w-full h-80 zoom  object-cover" />
          </Link>
        <div className="flex border border-white-08 rounded-3xl w-full">
          <FeatureCardContent url={url} title={title} description={description} />
        </div>
      </div>
    </>
  )
}
