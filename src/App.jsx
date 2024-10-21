import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from "react-router-dom";
import TodoApp from './Components/todo/TodoApp';

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
