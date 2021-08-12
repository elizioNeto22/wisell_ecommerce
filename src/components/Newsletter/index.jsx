import React from 'react'

import CustomLink from '../../components/Link'
import CustomButton from '../../components/Button'
import { Text } from '../../components/Text'

import './styles.scss'
import './styles-mobile.scss'

const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container">
        <div className="newsletter-text-container">
          <span>Se conecte com a gente!</span>
          <span>Receba ofertas recomendadas e preços exclusivos!</span>
          <CustomLink size="mm">Política de Privacidade</CustomLink>
        </div>
        <div className="newsletter-inputs-container">
          <input type="text" placeholder="Digite o seu nome" />
          <input type="email" placeholder="Digite o seu e-mail" />
          <CustomButton>EU QUERO</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
