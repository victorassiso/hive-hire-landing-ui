import { createBrowserRouter } from 'react-router-dom'

import { Landing } from '@/pages/_layouts/landing'
import { Home } from '@/pages/home/home'
import { Rentals } from '@/pages/rentals'

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
        path: '/rentals',
        element: <Rentals />,
      },
    ],
  },
])
