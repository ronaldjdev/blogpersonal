export const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="m-1 text- text-center md:leading-[5rem] text-xl md:text-5xl">
            <span className="bgText font-poppins font-semibold ">
              {title}
            </span>
        </h1>
        <h1 className="text-white text-center font-thin font-inter text- md:text-xl">
          {subtitle}
        </h1>
      </div >
    </>
  )
}
