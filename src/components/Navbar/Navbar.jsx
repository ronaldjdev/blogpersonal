import { NavItem } from './NavItem'

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
      <nav className="flex justify-between sticky top-0 z-50">
        <div className="flex"></div>
        <div className="flex m-3 py-2 px-20 rounded-3xl border border-white-08 bg-white-02 ">
          <ul className="flex gap-20 uppercase text-white font-bold text-sm tracking-widest">
            {data.map(({ to, label }) => (
              <NavItem key={label} to={to} label={label} />
            ))}
          </ul>
        </div>
        <div className="flex"></div>
      </nav>
    </>
  )
}
