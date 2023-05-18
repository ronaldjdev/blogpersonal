import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  const data = [
    { to: "/", label: "inicio" },
    { to: "/", label: "habilidades" },
    { to: "/", label: "proyectos" },
    { to: "/", label: "perfil" },
    { to: "/", label: "contactos" },
  ]

  return (

    <>
      <nav className="flex justify-between">
        <div className="flex"></div>
        <div className="flex m-3 py-3 px-20 rounded-3xl border bg-tropical-indigo-fade border-tropical-indigo">
          <ul className="flex gap-20 uppercase text-white font-bold text-sm tracking-widest">
            {
              data.map(({ to, label }) => <NavItem key={label} to={to} label={label} />)
            }
          </ul>
        </div>
        <div className="flex"></div>
      </nav>
    </>

  )
}