// @ts-nocheck
export const Button = ({ text , onClick}) => {
  return (
    <>
      <button onClick={onClick} className="bgGradient px-5 py-2 font-inter uppercase tracking-widest font-bold text-sm ">
        {text}
      </button>
    </>
  )
}
