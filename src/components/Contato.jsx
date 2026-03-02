import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    project_type: '',
    message: ''
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    try {
      await emailjs.send(
        'service_7ijozd6',  // Service ID
        'template_b3sdz67', // Template ID
        formData,
        'JXp6jPPTk9ljtW0hi' // Public Key
      )
      
      setStatus('success')
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        project_type: '',
        message: ''
      })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '5555997324370'
    const message = `Olá! Gostaria de solicitar um orçamento.

*Nome:* ${formData.from_name}
*Email:* ${formData.from_email}
*Telefone:* ${formData.phone}
*Tipo de Projeto:* ${formData.project_type}

*Mensagem:*
${formData.message}`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
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
                (55) 99732-4370<br />
                contato@priori.ind.br
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
            
            {/* Linha 1 */}
            <div className="form-row">
              <div className="form-group">
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="form-row">
              <div className="form-group">
                <label>Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Tipo de Projeto</label>
                <select 
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Cozinha">Cozinha</option>
                  <option value="Closet">Closet</option>
                  <option value="Dormitório">Dormitório</option>
                  <option value="Home Office">Home Office</option>
                  <option value="Projeto Completo">Projeto Completo</option>
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div className="form-group">
              <label>Mensagem</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder="Conte-nos sobre seu projeto"
              ></textarea>
            </div>

            {/* Mensagens de Status */}
            {status === 'success' && (
              <div className="status-message success">
                ✓ Orçamento enviado com sucesso! Entraremos em contato em breve.
              </div>
            )}
            {status === 'error' && (
              <div className="status-message error">
                ✗ Erro ao enviar. Tente novamente ou use o WhatsApp.
              </div>
            )}

            {/* Botões */}
            <div className="form-buttons">
              <button 
                type="button"
                onClick={handleSubmitEmail}
                className="submit-button"
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar por Email'}
              </button>
              
              <button 
                type="button"
                onClick={handleSubmitWhatsApp}
                className="submit-button-whatsapp"
              >
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