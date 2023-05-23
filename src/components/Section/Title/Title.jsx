export const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-center font-bold text-xl md:text-4xl">
          {title}
        </h1>
        <h1 className="text-white text-center font-thin text- md:text-xl">
          {subtitle}
        </h1>
      </div>
    </>
  )
}
