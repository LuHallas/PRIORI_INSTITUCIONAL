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
              <span className="parceiro-name">ZEN</span>
            </div>
            <div className="parceiro-item">
              <span className="parceiro-name">HARDT</span>
            </div>
            <div className="parceiro-item">
              <span className="parceiro-name">REHAU</span>
            </div>
          </div>

          {/* Linha 2 - 4 itens */}
          <div className="parceiros-linha-2">
            <div className="parceiro-item">
              <span className="parceiro-name">HÄFELE</span>
            </div>
            <div className="parceiro-item">
              <span className="parceiro-name">ARAUCO</span>
            </div>
            <div className="parceiro-item">
              <span className="parceiro-name">JRR DESIGN</span>
            </div>
            <div className="parceiro-item">
              <span className="parceiro-name">ROMETAL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Parceiros