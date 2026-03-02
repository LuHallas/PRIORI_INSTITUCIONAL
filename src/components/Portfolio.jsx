import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        
        {/* Header */}
        <div className="portfolio-header">
          <div className="portfolio-label">Nossos Projetos</div>
          <h2>Portfólio Exclusivo</h2>
          <p>
            Cada ambiente que criamos é uma expressão única de elegância e 
            funcionalidade. Conheça alguns dos nossos projetos mais emblemáticos.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="portfolio-grid">
          
          {/* Projeto 1 - Grande */}
          <Link to="/portfolio/cozinha-gourmet-jardins" className="portfolio-item portfolio-item-large">
            <div className="portfolio-image"></div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Cozinha Gourmet</h3>
                <p>Residência São Paulo</p>
              </div>
            </div>
          </Link>

          {/* Projeto 2 */}
          <Link to="/portfolio/home-theater-jardins" className="portfolio-item">
            <div className="portfolio-image portfolio-image-2"></div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Home Theater</h3>
                <p>Cobertura Jardins</p>
              </div>
            </div>
          </Link>

          {/* Projeto 3 */}
          <Link to="/portfolio/master-suite-itaim" className="portfolio-item">
            <div className="portfolio-image portfolio-image-3"></div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Master Suite</h3>
                <p>Penthouse Itaim</p>
              </div>
            </div>
          </Link>

          {/* Projeto 4 - ESCONDER NO MOBILE */}
          <Link to="/portfolio/closet-premium-morumbi" className="portfolio-item hide-mobile">
            <div className="portfolio-image portfolio-image-4"></div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Closet Premium</h3>
                <p>Residência Morumbi</p>
              </div>
            </div>
          </Link>

          {/* Projeto 5 - ESCONDER NO MOBILE */}
          <Link to="/portfolio/home-office-executivo" className="portfolio-item hide-mobile">
            <div className="portfolio-image portfolio-image-5"></div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Home Office</h3>
                <p>Escritório Executivo</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Portfolio