import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleScrollToSection = (sectionId) => {
    setMenuOpen(false)
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" onClick={handleHomeClick} className="logo">
          PRIORI
          <span className="logo-subtitle">DESIGN MOBILI</span>
        </Link>
        
        {/* Menu Hamburger */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Navigation */}
        <ul className={`nav-center ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
          <li><Link to="/sobre" onClick={handleLinkClick}>Sobre</Link></li>
          <li><Link to="/portfolio" onClick={handleLinkClick}>Portfólio</Link></li>
          <li><button onClick={() => handleScrollToSection('lojas')} className="nav-link-btn">Lojas</button></li>
          <li><button onClick={() => handleScrollToSection('parceiros')} className="nav-link-btn">Parceiros</button></li>
          <li><button onClick={() => handleScrollToSection('contato')} className="nav-link-btn">Contato</button></li>
        </ul>
        
        <button 
          onClick={() => handleScrollToSection('contato')} 
          className="nav-cta nav-cta-desktop"
        >
          Orçamento
        </button>
      </nav>

      {/* Overlay quando menu aberto */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  )
}

export default Header