import Homepage from './pages/Homepage'
import Cv from './pages/cv'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
