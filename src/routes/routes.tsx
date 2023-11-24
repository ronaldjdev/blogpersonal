import { Error404 } from 'components/Error/Error404'
import { Layout } from 'components/Layout/Layout/Layout'
import { Contact } from 'pages/Contact'
import { Home } from 'pages/Home'
import { Profile } from 'pages/Profile'
import { Project } from 'pages/Project/Project'
import { Skills } from 'pages/Skills'
import { createHashRouter } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom'

export const routes = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
