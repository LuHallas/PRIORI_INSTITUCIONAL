import './Parceiros.css'
// Importe as imagens
import logoZem from '../assets/parceiros_logo/parceiro_zem.png'
import logoHardt from '../assets/parceiros_logo/parceiro_hardt.png'
import logoRehau from '../assets/parceiros_logo/parceiro_rehau.png'
import logoHafele from '../assets/parceiros_logo/parceiro_hafele.png'
import logoArauco from '../assets/parceiros_logo/parceiro_arauco.png'
import logoJrr from '../assets/parceiros_logo/parceiro_jrr_designer.png'
import logoRometal from '../assets/parceiros_logo/parceiro_rometal.png'

function Parceiros() {
  return (
    <section className="parceiros" id="parceiros">
      <div className="parceiros-container">
        
        {/* Header */}
        <div className="parceiros-header">
          <div className="parceiros-label">Excelência Reconhecida</div>
          <h2>Nossos Parceiros</h2>
        </div>

        {/* Grid de Parceiros */}
        <div className="parceiros-grid">
          
          {/* Linha 1 - 3 itens */}
          <div className="parceiros-linha-1">
            <div className="parceiro-item">
              <img src={logoZem} alt="ZEM" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src={logoHardt} alt="Hardt" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src={logoRehau} alt="Rehau" className="parceiro-logo" />
            </div>
          </div>

          {/* Linha 2 - 4 itens */}
          <div className="parceiros-linha-2">
            <div className="parceiro-item">
              <img src={logoHafele} alt="Häfele" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src={logoArauco} alt="Arauco" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src={logoJrr} alt="JRR Designer" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src={logoRometal} alt="Rometal" className="parceiro-logo" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Parceiros