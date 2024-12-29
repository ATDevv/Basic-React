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
// import ProductPage from './pages/product.jsx';
import './styles/global.css'
import TodoApp from './Components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
import MyProfile from './pages/me.jsx';
import ToDo from './pages/todo.jsx';
import Book from './pages/book.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <MyProfile/>
      },
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/todo',
        element: <ToDo/>
      }
      ,
      {
        path: '/books',
        element: <Book/>
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
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
