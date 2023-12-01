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
          <div className="px-5 uppercase flex flex-col font-inter font-bold text-sm tracking-widest   nav-item">
            <span className="nav-label" >{label}</span>
            <span className="nav-label-0">{label}</span>
          </div>
        </Link>
      </li>
    </>
  )
}