import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from "react-router-dom"
import { Spin } from 'antd'
import { useContext } from 'react'
import { AuthContext } from './Components/context/auth.context'

const App = () => {
  const { isAppLoading } = useContext(AuthContext)

  return (
    <>
      {
        isAppLoading === true ? <Spin /> :
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
      }
    </>
  )
}

export default App
