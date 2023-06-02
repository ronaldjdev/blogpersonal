import React from 'react'
import { NavItem } from './NavItem'

export const Bottombar = () => {
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
        <div className="flex py-2 px-20 ">
          <ul className="flex gap-10 uppercase  font-bold text-sm tracking-widest">
            {data.map(({ to, label }) => (
              <NavItem key={label} to={to} label={label} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
