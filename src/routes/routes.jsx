import { Error404, Layout } from 'components'
import { Contact, Home, Profile, Project, Skills } from 'pages'
import { createHashRouter } from 'react-router-dom'

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
