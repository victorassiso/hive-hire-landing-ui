import { createBrowserRouter } from 'react-router-dom'

import { Landing } from '@/pages/_layouts/landing'
import { Home } from '@/pages/home/home'
import { AboutUs } from '@/pages/about-us'
import { Resources } from '@/pages/resources'
import { Cases } from '@/pages/cases'
import { Contacts } from '@/pages/contacts'
import { Solutions } from '@/pages/solutions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/solutions',
        element: <Solutions />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/cases',
        element: <Cases />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
])
