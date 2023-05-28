// @ts-nocheck
export const Button = ({ text, onClick, custom }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex py-2 px-5 h-[38px] rounded-3xl border border-white-08 bg-white-02  font-inter uppercase tracking-widest font-bold text-sm ${custom}`} 
      >
        {text}
      </button>
    </>
  )
}
