export const Input = ({ name, type, pattern = false }) => (
  <>
    <div className="flex flex-col">
      <label className="capitalize font-inter font-light m-3" htmlFor={name}>
        {name}:
      </label>
      <div className="relative w-full">
        <div className="starlight "> </div>
        <input
          className={`bg-inherit border border-white-08 text-center w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-2`}
          type={type}
          name={name}
          id={name}
          pattern={pattern && '[0-9]{10}'}
        />
      </div>
    </div>
  </>
)
