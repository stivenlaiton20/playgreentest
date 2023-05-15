import { createBrowserRouter } from 'react-router-dom'
import { Header } from '../components'
import { Error404, HistoryPage, HomePage, LoginPage, RegisterPage } from '../pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: (<Header />),
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
])

export default router
