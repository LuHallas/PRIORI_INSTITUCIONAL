import './Lojas.css'

function Lojas() {
  return (
    <section className="lojas" id="lojas">
      <div className="lojas-container">
        
        {/* Header */}
        <div className="lojas-header">
          <div className="lojas-label">Onde nos encontrar</div>
          <h2>Nossas Lojas</h2>
        </div>

        {/* Grid de 2 Lojas */}
        <div className="lojas-grid">
          
          {/* Loja 1 */}
          <div className="loja-card">
            <div className="loja-mapa-topo">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.255!2d-46.8527537!3d-23.6041782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03d3e2e3b7a5%3A0x1234567890!2sR.%20Tom%C3%A1s%20Sep%C3%A9%2C%20240%20-%20Jardim%20da%20Gloria%2C%20Cotia%20-%20SP%2C%2006711-270!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Loja Cotia"
              ></iframe>
            </div>
            <div className="loja-content">
              <h3>Cotia - Jardim da Glória</h3>
              <div className="loja-info">
                <div className="loja-info-item">📍 R. Tomás Sepé, 240 - Jardim da Gloria</div>
                <div className="loja-info-item">📞 (11) 97637-2670</div>
                <div className="loja-info-item">🕐 Seg a Sex: 10h às 19h</div>
                <div className="loja-info-item">🕐 Sáb: 10h às 16h</div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+Tomás+Sepé,+240+-+Jardim+da+Gloria,+Cotia+-+SP,+06711-270"
                target="_blank" 
                rel="noopener noreferrer"
                className="loja-link"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>

          {/* Loja 2 */}
          <div className="loja-card">
            <div className="loja-mapa-topo">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.255!2d-46.8527537!3d-23.6041782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03d3e2e3b7a5%3A0x1234567890!2sR.%20Tom%C3%A1s%20Sep%C3%A9%2C%20240%20-%20Jardim%20da%20Gloria%2C%20Cotia%20-%20SP%2C%2006711-270!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Loja Cotia 2"
              ></iframe>
            </div>
            <div className="loja-content">
              <h3>São Paulo - Pompeia</h3>

              <div className="loja-info">
                <div className="loja-info-item">📍 Av. Pompéia, 1001 - Pompeia, São Paulo - SP</div>
                <div className="loja-info-item">📞 (11) 97637-2670</div>
                <div className="loja-info-item">🕐 Seg a Sex: 10h às 19h</div>
                <div className="loja-info-item">🕐 Sáb: 10h às 16h</div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+Pompéia,+1001+-+Pompeia,+São+Paulo+-+SP,+05023-000"
                target="_blank" 
                rel="noopener noreferrer"
                className="loja-link"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Lojas