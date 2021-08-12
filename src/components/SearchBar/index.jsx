import React from 'react'
import { MdSearch } from 'react-icons/md'
import './styles.scss'

const FormInput = ({ ...otherProps }) => (
  <div className="searchbar-container">
    <label className="form-input-label">
      <MdSearch />
    </label>
    <input placeholder="Pesquisar" className="form-input" {...otherProps} />
  </div>
)

export default FormInput
