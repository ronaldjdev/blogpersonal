interface Props {
  corp: string;
  name: string;
  image: string;
  url: string;
  index: number;
}
export const ProjectSliderItem = ({ corp, name, image, url, index }: Partial<Props>) => {
  return (
    <>
      <div className="flex flex-col justify-around w-full h-full bg-red-500 px-4" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',  }}>
        <div>
          <h1 className="font-inter font-bold">0{index}</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-inter font-light capitalize">{corp}</h1>
          <h1 className="font-poppins font-bold text-3xl">{name}</h1>
          <a href={url} target="_blank" className="py-2 px-5 bg-black font-inter font-light capitalize w-fit">Ver demo</a>
        </div>
      </div>

    </>
  )
}