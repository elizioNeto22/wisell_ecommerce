import React from 'react'

import CustomLink from '../../components/Link'
import Dropdown from '../../components/Dropdown'
import { FiMenu } from 'react-icons/fi'

import './styles.scss'
import './styles-mobile.scss'

const DropdownItem = [
  'Agrícola',
  'Ferragens',
  'Medicamentos',
  'Biológicos',
  'Ordenha',
  'Defensivos',
  'Fertilizantes',
  'Jardinagem',
  'Pet',
  'Sementes',
  'Selaria',
  'Rações Balanceadas',
  'Suplementos Minerais',
  'Instrumentos Veterinários',
  'Ingredientes para Nutrição Animal',
]

const Links = ['AGRÍCOLA', 'FERRAGENS', 'MEDICAMENTOS', 'DEFENSIVOS', 'FERTILIZANTES', 'JARDINAGEM', 'PET', 'SEMENTES']

const BarraMenu = () => {
  return (
    <div className="menu-container">
      <ul>
        <li className="departamentos">
          <CustomLink href="#" size="md">
            <Dropdown items={DropdownItem}>Todos os Departamentos</Dropdown>
          </CustomLink>
        </li>
        {Links.map((item) => (
          <li>
            <CustomLink href="#" size="sm" hover>
              {item}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarraMenu
