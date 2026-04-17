import { useParams, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './ProjetoPage.css'
import { galeriaImagens } from '../data/galeriaImagens'

import cozinhaHeroImg from '../assets/images/cozinhas/cozinha-24.jpg'
import banheiroHeroImg from '../assets/images/banheiros/banheiro-09.png'
import dormitorioHeroImg from '../assets/images/quartos-closets/quarto-closets-04.jpeg'
import homeOfficeHeroImg from '../assets/images/escritorios/escritorio-01.jpg'
import salaHeroImg from '../assets/images/salas/sala-01.jpg'

const heroImagens = {
  COZINHAS: cozinhaHeroImg,
  BANHEIROS: banheiroHeroImg,
  'DORMITÓRIOS': dormitorioHeroImg,
  'HOME OFFICE': homeOfficeHeroImg,
  SALAS: salaHeroImg,
}

const dadosProjetos = {
  'cozinha-gourmet-jardins': { titulo: 'Cozinha Gourmet', categoria: 'COZINHAS', localizacao: 'Jardins - SP', ano: '2024', descricao: 'Projeto completo de cozinha gourmet com acabamentos premium e tecnologia de ponta, desenvolvido para integrar funcionalidade e sofisticação.' },
  'closet-premium-morumbi': { titulo: 'Banheiro', categoria: 'BANHEIROS', localizacao: 'Morumbi - SP', ano: '2024', descricao: 'Banheiro projetado com materiais nobres e detalhes refinados, criando um espaço de bem-estar e exclusividade.' },
  'master-suite-itaim': { titulo: 'Dormitório', categoria: 'DORMITÓRIOS', localizacao: 'Itaim - SP', ano: '2023', descricao: 'Suite master com closet integrado, combinando conforto e elegância em cada detalhe do projeto.' },
  'home-office-executivo': { titulo: 'Home Office', categoria: 'HOME OFFICE', localizacao: 'Pinheiros - SP', ano: '2023', descricao: 'Escritório executivo planejado para maximizar produtividade com design sofisticado e ergonomia.' },
  'living-integrado': { titulo: 'Sala', categoria: 'SALAS', localizacao: 'Vila Madalena - SP', ano: '2024', descricao: 'Living integrado com ambientes fluidos e mobiliário sob medida que valoriza cada metro quadrado.' },
  'cozinha-moderna': { titulo: 'Cozinha Moderna', categoria: 'COZINHAS', localizacao: 'Higienópolis - SP', ano: '2023', descricao: 'Cozinha moderna com design clean e funcional, pensada para o dia a dia sem abrir mão da estética.' },
  'closet-casal': { titulo: 'Banheiro', categoria: 'BANHEIROS', localizacao: 'Brooklin - SP', ano: '2024', descricao: 'Projeto de banheiro contemporâneo com revestimentos exclusivos e iluminação cuidadosamente planejada.' },
  'quarto-jovem': { titulo: 'Dormitório', categoria: 'DORMITÓRIOS', localizacao: 'Moema - SP', ano: '2023', descricao: 'Quarto infantil criativo e funcional, com móveis planejados que crescem junto com a criança.' },
}

function ProjetoPage() {
  const { slug } = useParams()
  const location = useLocation()
  const [indiceAtivo, setIndiceAtivo] = useState(0)

  const projeto = dadosProjetos[slug] || dadosProjetos['cozinha-gourmet-jardins']
  const imagemHero = location.state?.img || heroImagens[projeto.categoria] || null
  const galeria = galeriaImagens[projeto.categoria] || []

  const anterior = () => setIndiceAtivo(i => (i === 0 ? galeria.length - 1 : i - 1))
  const proximo = () => setIndiceAtivo(i => (i === galeria.length - 1 ? 0 : i + 1))

  return (
    <div className="projeto-page">

      {/* Hero */}
      <section className="projeto-hero">
        <div className="projeto-hero-image">
          {imagemHero
            ? <img src={imagemHero} alt={projeto.titulo} />
            : <div className="projeto-hero-placeholder"></div>
          }
        </div>
        <div className="projeto-hero-overlay">
          <div className="projeto-hero-content">
            <div className="projeto-categoria">{projeto.categoria}</div>
            <h1>{projeto.titulo}</h1>
            <p>{projeto.localizacao} • {projeto.ano}</p>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="projeto-descricao">
        <div className="projeto-descricao-container">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
        </div>
      </section>

      {/* Galeria - Carrossel */}
      <section className="projeto-galeria">
        <div className="projeto-galeria-container">
          <h2>Galeria de Imagens</h2>

          <div className="carrossel-wrapper">
            <button className="carrossel-btn carrossel-btn-prev" onClick={anterior}>&#8592;</button>

            <div className="carrossel">
              <div className="carrossel-track" style={{ transform: `translateX(-${indiceAtivo * 100}%)` }}>
                {galeria.map((img, index) => (
                  <div className="carrossel-slide" key={index}>
                    <img src={img} alt={`${projeto.titulo} ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="carrossel-indicadores">
                {galeria.map((_, index) => (
                  <button
                    key={index}
                    className={`carrossel-dot ${index === indiceAtivo ? 'ativo' : ''}`}
                    onClick={() => setIndiceAtivo(index)}
                  />
                ))}
              </div>
            </div>

            <button className="carrossel-btn carrossel-btn-next" onClick={proximo}>&#8594;</button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="projeto-cta">
        <div className="projeto-cta-container">
          <h2>Gostou deste Projeto?</h2>
          <p>Entre em contato e vamos criar algo incrível para você também.</p>
          <a href="#contato" className="cta-button-projeto">Solicitar Orçamento</a>
        </div>
      </section>

    </div>
  )
}

export default ProjetoPage