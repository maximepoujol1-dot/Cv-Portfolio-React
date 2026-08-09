import Homepage from './pages/Homepage'
import Cv from './pages/Cv'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
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
