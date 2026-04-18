import './Sobre.css'
import sobreImage from '../assets/images/fabrica/fabrica-01.jpg'

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-container">
        
        {/* Lado Esquerdo - Imagem */}
        <div className="sobre-images">
          <div className="sobre-image-main">
            <img src={sobreImage} alt="Fábrica Priori Design Mobili" />
          </div>
          
          <div className="sobre-image-overlay">
            <div className="sobre-stat">
              <h4 className="number">2.000+</h4>
              <p>Projetos Realizados</p>
            </div>
            <div className="sobre-stat">
              <h4 className="number">6.000m²</h4>
              <p>De estrutura própria</p>
            </div>
          </div>
        </div>

        {/* Lado Direito - Texto */}
        <div className="sobre-content">
          <div className="sobre-label">Experiência e Excelência</div>
          <h2>Excelência em Móveis Sob Medida</h2>
          <div className="sobre-divider"></div>
          
          <p>
            Nascemos de um sonho, muita coragem e da vontade genuína de fazer 
            diferente. Da garagem de menos de 4m² ao parque fabril de 6.000m² — 
            uma jornada construída com resiliência e compromisso com a qualidade.
          </p>
          
          <p>
            Nossa estrutura alia tecnologia industrial de ponta ao toque artesanal, 
            porque acreditamos que a essência da marcenaria está nas mãos dos nossos 
            marceneiros. Cada móvel passa por processos rigorosos e olhares atentos.
          </p>
          
          <p>
            Mais de 2.000 projetos nos ensinaram que o verdadeiro luxo está em criar 
            espaços que refletem quem você é. Porque um lar bem planejado não apenas 
            acomoda, ele inspira.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Sobre