import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import './styles/global.css'
import ErrorPage from './pages/error.jsx';
import MyProfile from './pages/me.jsx';
import ToDo from './pages/todo.jsx';
import Book from './pages/book.jsx';
import { AuthWrapper } from './Components/context/auth.context.jsx';
import PrivateRoute from './pages/private.route.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MyProfile />
      },
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/todo',
        element: <ToDo />
      }
      ,
      {
        path: '/books',
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthWrapper>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthWrapper>
)
