import React from 'react'

import CustomLink from '../../components/Link'
import CustomButton from '../../components/Button'
import { Text } from '../../components/Text'

import './styles.scss'
import './styles-mobile.scss'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section-container">
          <p className="footer-title">Formas de Pagamento</p>
          <div className="footer-cards-container">
            <div className="footer-pgto">
              <p>Crédito</p>
              <img src="https://img.icons8.com/color/100/000000/visa.png" />
              <img src="https://img.icons8.com/offices/30/000000/mastercard-logo.png" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" />
              <img src="https://img.icons8.com/color/48/000000/diners-club.png" />
            </div>
            <div className="footer-pgto">
              <p>Boleto</p>
              <img src="https://img.icons8.com/material-outlined/24/000000/barcode.png" />
            </div>
            <div className="footer-pgto">
              <p>Pix</p>
              <img src="https://img.icons8.com/office/30/000000/mobile-payment.png" />
            </div>
          </div>
        </div>
        <div className="footer-section-container">
          <p>Compra Segura</p>
          <div className="footer-selos-container">
            <img src="https://www.reclameaqui.com.br/error-page/reclame-aqui-logo.svg" alt="" />
            <img
              src="http://teekitstorage.blob.core.windows.net/jn2-attachments/aef52544-fdba-43b2-badb-bdc7ca5ae594.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
