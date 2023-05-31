// @ts-nocheck
import React from 'react'
import { Navbar, Footer } from 'components'
import { Outlet } from 'react-router-dom'
import stars2 from 'assets/images/stars2.png'

export const Layout = () => {
  return (
    <>
      <div
        className="flex flex-col w-full min-h-screen"
        style={{
          backgroundImage: `url(${stars2})`,
          backgroundColor: ' #030014 ',
          backgroundPosition: '50%',
        }}
      >
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
