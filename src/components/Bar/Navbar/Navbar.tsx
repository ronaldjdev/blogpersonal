import { Brand } from './Brand'
import { NavItem } from './NavItem'
import { Button } from 'components/Button/Button/Button'

export const Navbar = () => {
  const data = [
    { to: '/', label: 'inicio' },
    { to: '/skills', label: 'habilidades' },
    { to: '/projects', label: 'proyectos' },
    { to: '/profile', label: 'perfil' },
    { to: '/contact', label: 'contactos' },
  ]

  return (
    <>
      <nav className="flex mx-10 my-5 items-center justify-between gap-4 w-full">
        <div className="flex py-2 pr-5 w-[100px]">
          <Brand />
        </div>
        <div className="flex items-center justify-center  py-2 px-20 rounded-3xl border border-white-08 bg-white-02 ">
          <ul className="flex gap-16 ">
            {data.map(({ to, label }) => (
              <NavItem key={label} to={to} label={label} />
            ))}
          </ul>
        </div>
        <div className="flex py-2 px-5 items-center justify-center w-[100px] ">
          <Button text="login" />
        </div>
      </nav>
    </>
  )
}
