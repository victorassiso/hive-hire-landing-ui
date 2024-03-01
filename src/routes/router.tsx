import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/home'
import { Rentals } from '@/pages/rentals'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/rentals',
    element: <Rentals />,
  },
])
