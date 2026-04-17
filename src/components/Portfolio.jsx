import { Link } from 'react-router-dom'
import './Portfolio.css'
import cozinhaImg from '../assets/images/cozinhas/cozinha-17.png'
import homeOfficeImg from '../assets/images/escritorios/escritorio-09.jpg'
import suiteImg from '../assets/images/quartos-closets/quarto-closets-04.jpeg'
import quartoInfantilImg from '../assets/images/quartos-closets/quarto-infantil-03.jpg'
import escritorioImg from '../assets/images/escritorios/escritorio-05.jpeg'

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
          <Link 
            to="/portfolio/cozinha-gourmet-jardins" 
            state={{ img: cozinhaImg }}
            className="portfolio-item portfolio-item-large"
          >
            <div className="portfolio-image">
              <img src={cozinhaImg} alt="Cozinha Gourmet" />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Cozinha</h3>
                <p>Residência São Paulo</p>
              </div>
            </div>
          </Link>

          {/* Projeto 2 */}
          <Link 
            to="/portfolio/home-theater-jardins" 
            state={{ img: homeOfficeImg }}
            className="portfolio-item"
          >
            <div className="portfolio-image portfolio-image-2">
              <img src={homeOfficeImg} alt="Home Office" />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Home Office</h3>
                <p>Cobertura Jardins</p>
              </div>
            </div>
          </Link>

          {/* Projeto 3 */}
          <Link 
            to="/portfolio/master-suite-itaim" 
            state={{ img: suiteImg }}
            className="portfolio-item"
          >
            <div className="portfolio-image portfolio-image-3">
              <img src={suiteImg} alt="Suite" />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Suite</h3>
                <p>Penthouse Itaim</p>
              </div>
            </div>
          </Link>

          {/* Projeto 4 - ESCONDER NO MOBILE */}
          <Link 
            to="/portfolio/closet-premium-morumbi" 
            state={{ img: quartoInfantilImg }}
            className="portfolio-item hide-mobile"
          >
            <div className="portfolio-image portfolio-image-4">
              <img src={quartoInfantilImg} alt="Quarto Infantil" />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Quarto infantil</h3>
                <p>Residência Morumbi</p>
              </div>
            </div>
          </Link>

          {/* Projeto 5 - ESCONDER NO MOBILE */}
          <Link 
            to="/portfolio/home-office-executivo" 
            state={{ img: escritorioImg }}
            className="portfolio-item hide-mobile"
          >
            <div className="portfolio-image portfolio-image-5">
              <img src={escritorioImg} alt="Escritório" />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h3>Escritório</h3>
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