import { Navbar } from 'components/Bar/Navbar/Navbar'
import { Footer } from 'components/Section/Footer/Footer'
import { Outlet } from 'react-router-dom'
import stars2 from 'assets/images/stars2.png'

export const Layout = () => {
  return (
    <>
      <div
        className="flex flex-col items-center m-0 max-w-screen h-full"
        style={{
          backgroundImage: `url(${stars2})`,
          backgroundColor: ' #030014 ',
          backgroundPosition: '50%',
        }}
      >
        <header className="flex items-center justify-center w-full realtive z-10">
          <Navbar />
        </header>
        <main className="flex items-center px-0 justify-center w-full h-full pb-32">
          <Outlet />
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  )
}
