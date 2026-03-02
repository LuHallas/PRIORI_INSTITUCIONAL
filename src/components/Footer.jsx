import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Grid Principal */}
        <div className="footer-main">
          
          {/* Coluna 1 - Marca */}
          <div className="footer-brand">
            <h3>PRIORI</h3>
            <p>
              Móveis sob medida de alto padrão. Desde 2006, transformando 
              ambientes em verdadeiras obras de arte através do design 
              exclusivo e da mais alta qualidade.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className="footer-section">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><button onClick={() => handleScrollToSection('lojas')} className="footer-link-btn">Lojas</button></li>
              <li><button onClick={() => handleScrollToSection('parceiros')} className="footer-link-btn">Parceiros</button></li>
            </ul>
          </div>

{/* Coluna 3 - Ambientes */}
<div className="footer-section">
  <h4>Ambientes</h4>
  <ul>
    <li><Link to="/portfolio" state={{ filtro: 'COZINHAS' }}>Cozinhas</Link></li>
    <li><Link to="/portfolio" state={{ filtro: 'CLOSETS' }}>Closets</Link></li>
    <li><Link to="/portfolio" state={{ filtro: 'DORMITÓRIOS' }}>Dormitórios</Link></li>
    <li><Link to="/portfolio" state={{ filtro: 'HOME OFFICE' }}>Home Office</Link></li>
    <li><Link to="/portfolio" state={{ filtro: 'SALAS' }}>Salas</Link></li>
  </ul>
</div>

          {/* Coluna 4 - Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li><a href="tel:+5555997324370">(55) 99732-4370</a></li>
              <li><a href="mailto:luciane.hallas08@gmail.com">luciane.hallas08@gmail.com</a></li>
              <li><button onClick={() => handleScrollToSection('contato')} className="footer-link-btn">Solicitar Orçamento</button></li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <p>&copy; 2026 Priori Móveis. Todos os direitos reservados.</p>
          
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer