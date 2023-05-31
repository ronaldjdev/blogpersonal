import React from 'react'
import { Navbar, Footer } from 'components'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-1 h-full pb-32">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
