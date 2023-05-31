import React from "react"
import { Brand, NavItem } from 'components'

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
      <nav className="flex mx-10 my-5 items-center justify-between">
        <div className="flex ">
          <Brand />
        </div>
        <div className="flex py-2 px-20 rounded-3xl border border-white-08 bg-white-02 ">
          <ul className="flex gap-20 uppercase text-white font-bold text-sm tracking-widest">
            {data.map(({ to, label }) => (
              <NavItem key={label} to={to} label={label} />
            ))}
          </ul>
        </div>
        <div className="flex py-2 px-5 rounded-3xl border border-white-08 bg-white-02 ">
          <button className="flex uppercase font-bold text-sm tracking-widest">
            Login
          </button>
        </div>
      </nav>
    </>
  )
}
