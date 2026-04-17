import { Link } from 'react-router-dom'
import '../components/Hero.css'
import heroImage from "../assets/images/cozinhas/cozinha-24.jpg"

function Hero() {
    console.log('heroImage:', heroImage) // 👈 adiciona aqui

    return (
        <section className="hero">
            <div className="hero-container">
                {/* lado esquerdo - Texto*/}
                <div className="hero-text">
                    <div className="hero-label">ESPAÇOS QUE INSPIRAM</div>

                    <h1>
                        <span className="hero-title-light">Onde a arte</span>
                        <br />
                        <span className="hero-title-green">encontra o lar</span>
                    </h1>

                    <p className="hero-subtitle">
                        E onde cada espaço revela sua essência. Móveis projetados para eternizar momentos. Ambientes que inspiram a arte de viver.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/portfolio" className="hero-cta-secondary">Ver Portfólio</Link>
                    </div>
                </div>

                {/* Lado Direito - Visual */}
                <div className="hero-visual">
                    <div className="hero-accent-line"></div>
                    <div className="hero-main-image">
                        <img src={heroImage} alt="Ambiente elegante com móveis personalizados" />
                    </div>

                    <div className="hero-floating-card">
                        <h3 className="number">2.000+</h3>
                        <p>Projetos Realizados</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero