import { Link } from 'react-router-dom'

interface Props {
  to: string
  label: string
}

export const NavItem = ({ to, label }: Partial<Props>) => {
  return (
    <>
      <li>
        <Link to={to ? to : '#'}>
          <div className="px-5 uppercase font-inter font-bold text-sm tracking-widest  text-red-500 bg-button hover:rounded-full hover:text-rich-black">
            <span >{label}</span>
          </div>
        </Link>
      </li>
    </>
  )
}