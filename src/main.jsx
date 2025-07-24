import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Location from './pages/Location.jsx'

const router = createBrowserRouter([
  {
    Component: Navbar,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />
      },
      { path: 'location', element: <Location /> },
      { path: 'contact', element: <Contact /> }
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
