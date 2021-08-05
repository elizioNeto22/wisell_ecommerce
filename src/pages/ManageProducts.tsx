import React, { useState } from 'react'
import Button from '../components/UI/Button'
import AddAndEditProduct from '../components/products/manage-products/AddAndEditProduct'

interface Props {}

const ManageProducts: React.FC<Props> = () => {
  
  const [openProductForm, setOpenProductForm] = useState(false);

  return (
    <div className="page--manage-products">
      <div className="manage-products__section">
        <Button className='btn--orange' width='12rem' onClick={() => {setOpenProductForm(true);} }>Adicionar Produto</Button>
        
        {/*Checa se clicou no botão e apresenta o formulário de cadastrar produto */}
        {openProductForm && <AddAndEditProduct setOpenProdutForm={setOpenProductForm}/>}
      </div>

    </div>
  );
}

export default ManageProducts

