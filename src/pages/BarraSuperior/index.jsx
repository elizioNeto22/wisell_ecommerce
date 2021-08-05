import React from 'react'

import CustomLink from '../../components/Link'
import { Text } from '../../components/Text'

import './styles.scss'

const BarraSuperior = () => {
  return (
    <div className="superior-container">
      <div className="superior-link-group">
        <ul>
          <li>
            <CustomLink href="#" size="sm">
              Nossas lojas
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="sm">
              Tenha sua loja
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="sm">
              Regulamentos
            </CustomLink>
          </li>
          <li>
            <CustomLink href="#" size="sm">
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
