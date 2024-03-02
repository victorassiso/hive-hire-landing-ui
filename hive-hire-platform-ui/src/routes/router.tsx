import { AppLayout } from '@/pages/_layouts/app'
import { Dashboard } from '@/pages/dashboard/dashboard'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
])
