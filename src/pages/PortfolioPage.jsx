import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './PortfolioPage.css'

function PortfolioPage() {
  const location = useLocation()
  const [filtroAtivo, setFiltroAtivo] = useState('TODOS')

  // Aplicar filtro vindo do state (quando clicado no Footer) e scrollar para topo
  useEffect(() => {
    window.scrollTo(0, 0) // ← Scroll para o topo
    if (location.state?.filtro) {
      setFiltroAtivo(location.state.filtro)
    }
  }, [location.state])

  const projetos = [
    { id: 1, titulo: 'Cozinha Gourmet', local: 'Jardins - SP', ano: '2024', categoria: 'COZINHAS', slug: 'cozinha-gourmet-jardins', gradient: 'gradient-brown' },
    { id: 2, titulo: 'Closet Premium', local: 'Morumbi - SP', ano: '2024', categoria: 'CLOSETS', slug: 'closet-premium-morumbi', gradient: 'gradient-green' },
    { id: 3, titulo: 'Master Suite', local: 'Itaim - SP', ano: '2023', categoria: 'DORMITÓRIOS', slug: 'master-suite-itaim', gradient: 'gradient-brown-dark' },
    { id: 4, titulo: 'Home Office', local: 'Pinheiros - SP', ano: '2023', categoria: 'HOME OFFICE', slug: 'home-office-executivo', gradient: 'gradient-green-light' },
    { id: 5, titulo: 'Living Integrado', local: 'Vila Madalena - SP', ano: '2024', categoria: 'SALAS', slug: 'living-integrado', gradient: 'gradient-beige' },
    { id: 6, titulo: 'Cozinha Moderna', local: 'Higienópolis - SP', ano: '2023', categoria: 'COZINHAS', slug: 'cozinha-moderna', gradient: 'gradient-brown' },
    { id: 7, titulo: 'Closet Casal', local: 'Brooklin - SP', ano: '2024', categoria: 'CLOSETS', slug: 'closet-casal', gradient: 'gradient-green' },
    { id: 8, titulo: 'Quarto Jovem', local: 'Moema - SP', ano: '2023', categoria: 'DORMITÓRIOS', slug: 'quarto-jovem', gradient: 'gradient-brown-dark' }
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
          <button 
            className={`filtro-btn ${filtroAtivo === 'TODOS' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('TODOS')}
          >
            TODOS
          </button>
          <button 
            className={`filtro-btn ${filtroAtivo === 'COZINHAS' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('COZINHAS')}
          >
            COZINHAS
          </button>
          <button 
            className={`filtro-btn ${filtroAtivo === 'CLOSETS' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('CLOSETS')}
          >
            CLOSETS
          </button>
          <button 
            className={`filtro-btn ${filtroAtivo === 'DORMITÓRIOS' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('DORMITÓRIOS')}
          >
            DORMITÓRIOS
          </button>
          <button 
            className={`filtro-btn ${filtroAtivo === 'HOME OFFICE' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('HOME OFFICE')}
          >
            HOME OFFICE
          </button>
          <button 
            className={`filtro-btn ${filtroAtivo === 'SALAS' ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo('SALAS')}
          >
            SALAS
          </button>
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
                <div className={`projeto-imagem ${projeto.gradient}`}></div>
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