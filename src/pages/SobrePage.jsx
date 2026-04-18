import './SobrePage.css'
import fabricaVideo from '../assets/images/fabrica/video.mp4'
import { Link } from 'react-router-dom'

function SobrePage() {
  return (
    <div className="sobre-page">
      
      {/* Hero Sobre */}
      <section className="sobre-hero">
        <div className="sobre-hero-container">
          <div className="sobre-hero-content">
            <div className="sobre-hero-label">Conheça a Priori</div>
            <h1>
              Da Garagem<br />
              ao Parque Fabril
            </h1>
            <p className="sobre-hero-subtitle">
              Uma história de coragem, resiliência e paixão por criar móveis 
              que transformam vidas.
            </p>
          </div>
          <div className="sobre-hero-visual">
            <div className="sobre-hero-image">
              <video
                src={fabricaVideo}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling */}
      <section className="storytelling">
        <div className="storytelling-header">
          <div className="storytelling-label">Nossa Jornada</div>
          <h2>Uma História de Excelência</h2>
          <p>
            Cada marco representa nosso compromisso constante em superar 
            expectativas e criar móveis que transcendem gerações.
          </p>
        </div>

        <div className="storytelling-container">
          
          <div className="story-block">
            <div className="story-number">01</div>
            <h3>O Sonho</h3>
            <p>
              A PRIORI nasceu de um sonho, muita coragem e da vontade genuína 
              de fazer diferente. Fernando Rossetti, com mais de 10 anos de 
              experiência no setor moveleiro, e sua esposa Priscila Monteiro, 
              designer de interiores, compartilhavam uma ideia: Criar algo próprio.
            </p>
            <p>
              Com poucos recursos mas um sonho enorme, iniciaram a produção na 
              garagem da família. Um espaço de menos de 4 metros quadrados, mas 
              que carregava algo muito maior: vontade de crescer, resiliência e 
              compromisso com a qualidade.
            </p>
          </div>

          <div className="story-block">
            <div className="story-number">02</div>
            <h3>O Crescimento</h3>
            <p>
              Com o tempo, vieram as primeiras oportunidades, os primeiros 
              clientes e a possibilidade de alugar um pequeno galpão. A estrutura 
              cresceu aos poucos, de forma sólida e consciente, acompanhada pela 
              consolidação da marca no mercado.
            </p>
            <p>
              Ano após ano, a PRIORI evoluiu. Investimos em equipamentos industriais 
              de ponta, unindo tradição artesanal com precisão tecnológica para 
              elevar ainda mais nossos padrões.
            </p>
          </div>

          <div className="story-block">
            <div className="story-number">03</div>
            <h3>Hoje</h3>
            <p>
              Hoje, a empresa conta com parque fabril de mais de 6.000m², equipado 
              com maquinário industrial de ponta. Ainda assim, nunca abrimos mão 
              daquilo que consideramos nosso verdadeiro DNA: o olhar humano e o 
              acabamento artesanal.
            </p>
            <p>
              Mais de 2.000 projetos entregues, sempre com foco em excelência, 
              durabilidade e satisfação do cliente. E a história continua evoluindo 
              com a inauguração da nossa primeira loja na Avenida Pompéia, São Paulo.
            </p>
          </div>

        </div>
      </section>

      {/* Valores */}
      <section className="valores-sobre">
        <div className="valores-sobre-container">
          <div className="valores-header">
            <div className="valores-label">Nossos Pilares</div>
            <h2>O Que Nos Define</h2>
          </div>

          <div className="valores-grid">
            <div className="valor-card-sobre">
              <div className="valor-icon">◇</div>
              <h3>Excelência</h3>
              <p>Cada projeto é executado com perfeição absoluta, do primeiro desenho à instalação final.</p>
            </div>
            <div className="valor-card-sobre">
              <div className="valor-icon">◆</div>
              <h3>Exclusividade</h3>
              <p>Projetos únicos e personalizados que refletem a identidade de cada cliente.</p>
            </div>
            <div className="valor-card-sobre">
              <div className="valor-icon">◈</div>
              <h3>Inovação</h3>
              <p>Sempre à frente, trazendo as últimas tendências do design mundial.</p>
            </div>
            <div className="valor-card-sobre">
              <div className="valor-icon">◇</div>
              <h3>Compromisso</h3>
              <p>Dedicação total em cada etapa, garantindo satisfação plena.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="processo-sobre">
        <div className="processo-sobre-container">
          <div className="processo-header">
            <div className="processo-label">Como Trabalhamos</div>
            <h2>Nosso Método</h2>
            <p>Um processo cuidadosamente desenvolvido para garantir que cada projeto seja uma obra-prima.</p>
          </div>

          <div className="processo-grid">
            <div className="processo-item-sobre">
              <div className="processo-numero">01</div>
              <div>
                <h3>Consultoria Inicial</h3>
                <p>Reunião detalhada para compreender suas necessidades, estilo e expectativas. Visitamos o local e fazemos todas as medições necessárias.</p>
              </div>
            </div>
            <div className="processo-item-sobre">
              <div className="processo-numero">02</div>
              <div>
                <h3>Projeto 3D</h3>
                <p>Desenvolvemos renderizações fotorrealistas e plantas técnicas detalhadas, permitindo visualizar cada detalhe antes da produção.</p>
              </div>
            </div>
            <div className="processo-item-sobre">
              <div className="processo-numero">03</div>
              <div>
                <h3>Produção Premium</h3>
                <p>Fabricação com materiais selecionados e tecnologia de ponta. Cada peça passa por rigoroso controle de qualidade.</p>
              </div>
            </div>
            <div className="processo-item-sobre">
              <div className="processo-numero">04</div>
              <div>
                <h3>Montagem</h3>
                <p>Equipe especializada realiza a montagem com precisão milimétrica. Entregando seu projeto pronto para uso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="numeros-sobre">
        <div className="numeros-sobre-container">
          <div className="numero-item-sobre">
            <h3 className="number">6+</h3>
            <p>Anos de Mercado</p>
          </div>
          <div className="numero-item-sobre">
            <h3 className="number">2.000+</h3>
            <p>Projetos Realizados</p>
          </div>
          <div className="numero-item-sobre">
            <h3 className="number">6.000m²</h3>
            <p>De estrutura própria</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sobre">
        <div className="cta-sobre-container">
          <h2>Pronto para Começar?</h2>
          <p>Transforme seus ambientes com a expertise de quem entende verdadeiramente de design e qualidade.</p>
          <Link to="/contato" className="cta-button-sobre">Solicitar Orçamento</Link>
        </div>
      </section>

    </div>
  )
}

export default SobrePage