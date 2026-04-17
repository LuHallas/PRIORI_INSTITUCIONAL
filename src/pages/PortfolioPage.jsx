import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './PortfolioPage.css'
import cozinhaGourmetImg from '../assets/images/cozinhas/cozinha-24.jpg'
import banheiroImg from '../assets/images/banheiros/banheiro-01.jpg'
import suiteImg from '../assets/images/quartos-closets/quarto-closets-04.jpeg'
import homeOfficeImg from '../assets/images/escritorios/escritorio-01.jpg'
import salaImg from '../assets/images/salas/sala-01.jpg'
import cozinhaModernaImg from '../assets/images/cozinhas/cozinha-19.png'
import banheiroBrooklimImg from '../assets/images/banheiros/banheiro-09.png'
import quartoInfantilImg from '../assets/images/quartos-closets/quarto-infantil-03.jpg'

function PortfolioPage() {
  const location = useLocation()
  const [filtroAtivo, setFiltroAtivo] = useState('TODOS')

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.state?.filtro) {
      setFiltroAtivo(location.state.filtro)
    }
  }, [location.state])

  const projetos = [
    { id: 1, titulo: 'Cozinha Gourmet', local: 'Jardins - SP', ano: '2024', categoria: 'COZINHAS', slug: 'cozinha-gourmet-jardins', img: cozinhaGourmetImg },
    { id: 2, titulo: 'Banheiro', local: 'Morumbi - SP', ano: '2024', categoria: 'BANHEIROS', slug: 'closet-premium-morumbi', img: banheiroImg },
    { id: 3, titulo: 'Dormitório', local: 'Itaim - SP', ano: '2023', categoria: 'DORMITÓRIOS', slug: 'master-suite-itaim', img: suiteImg },
    { id: 4, titulo: 'Home Office', local: 'Pinheiros - SP', ano: '2023', categoria: 'HOME OFFICE', slug: 'home-office-executivo', img: homeOfficeImg },
    { id: 5, titulo: 'Sala', local: 'Vila Madalena - SP', ano: '2024', categoria: 'SALAS', slug: 'living-integrado', img: salaImg },
    { id: 6, titulo: 'Cozinha Moderna', local: 'Higienópolis - SP', ano: '2023', categoria: 'COZINHAS', slug: 'cozinha-moderna', img: cozinhaModernaImg },
    { id: 7, titulo: 'Banheiro', local: 'Brooklin - SP', ano: '2024', categoria: 'BANHEIROS', slug: 'closet-casal', img: banheiroBrooklimImg },
    { id: 8, titulo: 'Dormitório', local: 'Moema - SP', ano: '2023', categoria: 'DORMITÓRIOS', slug: 'quarto-jovem', img: quartoInfantilImg }
  ]

  const projetosFiltrados = filtroAtivo === 'TODOS'
    ? projetos
    : projetos.filter(p => p.categoria === filtroAtivo)

  return (
    <div className="portfolio-page">

      {/* Hero */}
      <section className="portfolio-page-hero">
        <div className="portfolio-page-hero-container">
          <div className="portfolio-hero-label">Nossos Projetos</div>
          <h1>Portfólio</h1>
          <p className="portfolio-hero-subtitle">
            Cada ambiente que criamos é uma expressão única de elegância e funcionalidade.
            Conheça alguns dos nossos projetos mais emblemáticos.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="filtros-portfolio">
        <div className="filtros-container">
          {['TODOS', 'COZINHAS', 'BANHEIROS', 'DORMITÓRIOS', 'HOME OFFICE', 'SALAS'].map(filtro => (
            <button
              key={filtro}
              className={`filtro-btn ${filtroAtivo === filtro ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo(filtro)}
            >
              {filtro}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="projetos-grid-section">
        <div className="projetos-container">
          <div className="projetos-grid">
            {projetosFiltrados.map(projeto => (
              <Link
                to={`/portfolio/${projeto.slug}`}
                key={projeto.id}
                className="projeto-card"
              >
                <div className="projeto-imagem">
                  <img src={projeto.img} alt={projeto.titulo} />
                </div>
                <div className="projeto-overlay">
                  <div className="projeto-info">
                    <span className="projeto-categoria">{projeto.categoria}</span>
                    <h3>{projeto.titulo}</h3>
                    <p>{projeto.local} • {projeto.ano}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-portfolio">
        <div className="cta-portfolio-container">
          <h2>Pronto para Transformar<br />Seu Espaço?</h2>
          <p>Agende uma consultoria gratuita e descubra como podemos criar o ambiente dos seus sonhos.</p>
          <a href="#contato" className="cta-button-portfolio">Solicitar Orçamento</a>
        </div>
      </section>

    </div>
  )
}

export default PortfolioPage