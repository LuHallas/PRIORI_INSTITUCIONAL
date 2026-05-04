import { useState } from 'react'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    project_type: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault()
    const whatsappNumber = '5511943948448'
    const message = `Olá! Gostaria de solicitar um orçamento.\n\n*Nome:* ${formData.from_name}\n*Email:* ${formData.from_email}\n*Telefone:* ${formData.phone}\n*Tipo de Projeto:* ${formData.project_type}\n\n*Mensagem:*\n${formData.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="contato" id="contato">
      <div className="contato-container">

        {/* Lado Esquerdo - Informações */}
        <div className="contato-info">
          <h2>Solicite<br />seu Orçamento</h2>
          <p>
            Transforme seus ambientes com móveis sob medida de verdadeiro alto 
            padrão. Nossa equipe está pronta para criar o projeto exclusivo que 
            você sempre desejou.
          </p>

          <div className="contato-details">
            <div className="contato-detail-item">
              <div className="detail-label">Central de Atendimento</div>
              <div className="detail-value">
                <a
                  href="https://wa.me/5511943948448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato-whatsapp-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="whatsapp-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  (11) 9 4394-8448
                </a>
                <br />
                contato@priorisobmedida.com.br
              </div>
            </div>
            <div className="contato-detail-item">
              <div className="detail-label">Showroom Principal</div>
              <div className="detail-value">
                R. Tomás Sepé, 240<br />
                Jardim da Glória - Cotia - SP
              </div>
            </div>
            <div className="contato-detail-item">
              <div className="detail-label">Horário de Atendimento</div>
              <div className="detail-value">
                Segunda a Sexta: 10h às 19h<br />
                Sábado: 10h às 16h
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">

            <div className="form-row">
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Tipo de Projeto</label>
                <select name="project_type" value={formData.project_type} onChange={handleChange} required>
                  <option value="">Selecione</option>
                  <option value="Cozinha">Cozinha</option>
                  <option value="Closet">Closet</option>
                  <option value="Dormitório">Dormitório</option>
                  <option value="Home Office">Home Office</option>
                  <option value="Projeto Completo">Projeto Completo</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mensagem</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Conte-nos sobre seu projeto"></textarea>
            </div>

            <div className="form-buttons">
              <button type="button" onClick={handleSubmitWhatsApp} className="submit-button-whatsapp">
                📱 Enviar por WhatsApp
              </button>
            </div>

          </div>
        </form>

      </div>
    </section>
  )
}

export default Contato