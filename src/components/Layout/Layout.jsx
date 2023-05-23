import { Navbar } from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  )
}
