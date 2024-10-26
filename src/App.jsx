import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
