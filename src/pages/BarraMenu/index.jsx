import React from 'react'

import CustomLink from '../../components/Link'
import Dropdown from '../../components/Dropdown'
import { FiMenu } from 'react-icons/fi'

import './styles.scss'

const BarraMenu = () => {
  return (
    <div className="menu-container">
      <ul>
        <li className="departamentos">
          <CustomLink href="#" size="md">
            <Dropdown items={['Acessórios', 'Fertilizantes', 'Sementes', 'Adubos', 'Máquinas']}>
              Todos os Departamentos
            </Dropdown>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Acessórios
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Fertilizantes
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Sementes
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Adubos
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Máquinas
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" size="md" hover>
            Promoções
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}

export default BarraMenu
