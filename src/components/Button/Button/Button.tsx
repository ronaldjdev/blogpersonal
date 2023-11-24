import { Link } from 'react-router-dom'

interface Props {
  text: string
  onClick: (e) => void
  custom: string
  icon: JSX.Element
  link: string
  form: string
  type: 'button' | 'submit' | 'reset'
}
export const Button = ({
  text,
  onClick,
  custom,
  icon,
  link,
  form,
  type,
}: Partial<Props>) => {
  return (
    <>
      <Link to={link ? link : '#'}>
        <button
          type={type ? type : 'button'}
          form={form}
          onClick={onClick}
          className={`flex py-2 px-5 h-[38px] w-auto m-0 items-center justify-center rounded-3xl border border-white-08 bg-white-02 font-inter uppercase tracking-widest font-bold text-sm ${custom} bg-button`}
        >
          <span className="text-inherit">
            {text}
            {icon}
          </span>
        </button>
      </Link>
    </>
  )
}
