import './Parceiros.css'

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
              <img src="/src/assets/parceiros_logo/parceiro_zem.png" alt="ZEM" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_hardt.png" alt="Hardt" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_rehau.png" alt="Rehau" className="parceiro-logo" />
            </div>
          </div>

          {/* Linha 2 - 4 itens */}
          <div className="parceiros-linha-2">
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_hafele.png" alt="Häfele" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_arauco.png" alt="Arauco" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_jrr_designer.png" alt="JRR Designer" className="parceiro-logo" />
            </div>
            <div className="parceiro-item">
              <img src="/src/assets/parceiros_logo/parceiro_rometal.png" alt="Rometal" className="parceiro-logo" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Parceiros