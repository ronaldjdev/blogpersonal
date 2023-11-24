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
          <h3>{label}</h3>
        </Link>
      </li>
    </>
  )
}
