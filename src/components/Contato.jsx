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
                (11) 9 4394-8448<br />
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