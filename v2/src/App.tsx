import { Route, Routes } from "react-router-dom"
import NotFoundPage from "./view/NotFoundPage"
import HomePage from "./view/HomePage"
import PortfolioPage from "./view/PortfolioPage"
import CvPage from "./view/CvPage"
import ContactPage from "./view/ContactPage"
import Navbar from "./component/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Portfolio" element={<PortfolioPage/>}/>
        <Route path="/Cv" element={<CvPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
