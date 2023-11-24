interface Props {
  name: string
  type: string
  pat: boolean
  notLabel: boolean
  placeholder: string
  onChange: (e) => void
}
export const Input = ({
  name,
  type,
  pat = false,
  notLabel,
  placeholder,
  onChange,
}: Partial<Props>) => {
  const pattern = '[0-9]{10}'
  return (
    <>
      <div className="flex flex-col">
        {!notLabel && (
          <label
            className="capitalize font-inter font-light m-3"
            htmlFor={name}
          >
            {name}:
          </label>
        )}
        <div className="relative w-full">
          <div className="starlight "> </div>
          <input
            className={`bg-inherit border border-white-08 text-center w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-2 placeholder`}
            type={type}
            placeholder={placeholder && name}
            name={name}
            id={name}
            pattern={pat ? pattern : ''}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  )
}
