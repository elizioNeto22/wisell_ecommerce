import React from 'react'

import CustomLink from '../../components/Link'
import { Text } from '../../components/Text'

import './styles.scss'
import './styles-mobile.scss'

const BarraSuperior = () => {
  return (
    <div className="superior-container">
      <div className="superior-link-group">
        <ul>
          <li>
            <CustomLink href="#" size="mm">
              Nossas lojas
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="mm">
              Tenha sua loja
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="mm">
              Regulamentos
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="mm">
              Guia de Segurança
            </CustomLink>
          </li>
        </ul>
      </div>
      <div className="superior-link-group">
        <ul>
          <li>
            <Text size="sm">Compre pelo telefone (81) 3328-7214</Text>
          </li>
          <li>
            <CustomLink size="sm" type="submit">
              Atendimento
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BarraSuperior
