import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Error404 } from 'components/Error/Error404';
import { Layout } from 'components/Layout/Layout/Layout';
import { Contact } from 'pages/Contact';
import { Home } from 'pages/Home';
import { Profile } from 'pages/Profile';
import { Project } from 'pages/Project/Project';
import { Skills } from 'pages/Skills';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          children={[
            { index: true, element: <Home /> },
            { path: 'skills', element: <Skills /> },
            { path: 'projects', element: <Project /> },
            { path: 'profile', element: <Profile /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <Error404 /> },
          ].map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            />
          ))}
        />
      </Routes>
    </Router>
  );
};
