import { useParams } from 'react-router-dom'
import './ProjetoPage.css'

function ProjetoPage() {
  const { slug } = useParams()

  // Dados do projeto (depois você pode buscar de uma API ou banco de dados)
  // Por enquanto, vou criar um exemplo fixo
  const projeto = {
    titulo: 'Cozinha Gourmet',
    categoria: 'Cozinha',
    localizacao: 'Cobertura Jardins',
    ano: '2024',
    descricao: 'Projeto completo de cozinha gourmet com 25m², desenvolvido para um casal que adora receber amigos. O ambiente integra funcionalidade e sofisticação, com acabamentos premium e tecnologia de ponta.',
    especificacoes: [
      { icone: '📐', titulo: 'Dimensões', valor: '25m²' },
      { icone: '🚪', titulo: 'Portas', valor: 'Laca fosca com sistema push-pull Blum' },
      { icone: '🎨', titulo: 'Acabamento', valor: 'MDF com laca premium acetinada' },
      { icone: '💎', titulo: 'Bancada', valor: 'Silestone Branco Zeus 3cm' },
      { icone: '🔧', titulo: 'Ferragens', valor: 'Blum Tandembox com amortecimento' },
      { icone: '⚡', titulo: 'Iluminação', valor: 'LED 3000K embutida em perfil' },
    ],
    galeria: [
      'gradient-brown',
      'gradient-green',
      'gradient-brown-dark',
      'gradient-beige'
    ]
  }

  return (
    <div className="projeto-page">
      
      {/* Hero com imagem grande */}
      <section className="projeto-hero">
        <div className="projeto-hero-image gradient-brown"></div>
        <div className="projeto-hero-overlay">
          <div className="projeto-hero-content">
            <div className="projeto-categoria">{projeto.categoria}</div>
            <h1>{projeto.titulo}</h1>
            <p>{projeto.localizacao} • {projeto.ano}</p>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="projeto-descricao">
        <div className="projeto-descricao-container">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
        </div>
      </section>

      {/* Galeria */}
      <section className="projeto-galeria">
        <div className="projeto-galeria-container">
          <h2>Galeria de Imagens</h2>
          <div className="galeria-grid">
            {projeto.galeria.map((imagem, index) => (
              <div key={index} className={`galeria-item ${imagem}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="projeto-specs">
        <div className="projeto-specs-container">
          <h2>Especificações Técnicas</h2>
          <div className="specs-grid">
            {projeto.especificacoes.map((spec, index) => (
              <div key={index} className="spec-card">
                <div className="spec-icone">{spec.icone}</div>
                <h3>{spec.titulo}</h3>
                <p>{spec.valor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projeto-cta">
        <div className="projeto-cta-container">
          <h2>Gostou deste Projeto?</h2>
          <p>Entre em contato e vamos criar algo incrível para você também.</p>
          <a href="#contato" className="cta-button-projeto">Solicitar Orçamento</a>
        </div>
      </section>

    </div>
  )
}

export default ProjetoPage