import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Location from './pages/Location.jsx'
import RootLayout from './pages/RootLayout.jsx'

const router = createBrowserRouter([
  {
    Component: RootLayout,
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
