import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import SobrePage from './pages/SobrePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjetoPage from './pages/ProjetoPage'
import ContatoPage from './pages/ContatoPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjetoPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App