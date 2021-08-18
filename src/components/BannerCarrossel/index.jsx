import React from 'react'
import CustomLink from '../Link'

import './styles.scss'
import './styles-mobile.scss'

const BannerCarrossel = () => (
  <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true, "autoPlay": true }'>
    <div class="gallery-cell">
      <img
        src="https://img.irroba.com.br/fit-in/1140x1140/filters:format(webp):quality(95)/cavalari/catalog/banners-novos/agosto21/cavalaria-banner03.png"
        alt=""
      />
    </div>
    <div class="gallery-cell">
      <img
        src="https://img.irroba.com.br/fit-in/1140x1140/filters:format(webp):quality(95)/cavalari/catalog/banners-novos/agosto21/cavalaria-banner04b.png"
        alt=""
      />
    </div>
    <div class="gallery-cell">
      <img src="	http://www.lojasranchoalegre.com.br/img/painel/2021/banner-avicultura.png" alt="" />
    </div>
    <div class="gallery-cell"></div>
    <div class="gallery-cell"></div>
  </div>
)

export default BannerCarrossel
