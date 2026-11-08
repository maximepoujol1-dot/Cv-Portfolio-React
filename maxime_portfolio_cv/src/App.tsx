import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import NotFoundPage from "./view/NotFoundPage"
import HomePage from "./view/HomePage"
import PortfolioPage from "./view/PortfolioPage"
import CvPage from "./view/CvPage"
import ContactPage from "./view/ContactPage"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

function App() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const updateDocumentLanguage = (language: string) => {
      document.documentElement.lang = language.split("-")[0]
    }
    updateDocumentLanguage(i18n.resolvedLanguage ?? i18n.language ?? "en")
    i18n.on("languageChanged", updateDocumentLanguage)
    return () => {
      i18n.off("languageChanged", updateDocumentLanguage)
    }
  }, [i18n])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Portfolio" element={<PortfolioPage />} />
              <Route path="/Cv" element={<CvPage />} />
              <Route path="/Contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer/>
    </div>
  )
}

export default App
