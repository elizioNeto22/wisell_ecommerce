import React from 'react'
import { useForm } from 'react-hook-form'

import {Product} from '../../../model'
import Button from '../../UI/Button'
import Input from '../../UI/Input';

interface Props {
    setOpenProdutForm: (open: boolean) => void;
}

const AddAndEditProduct: React.FC<Props> = ({setOpenProdutForm}) => {

    const {register, handleSubmit, formState: { errors } } = useForm<
        Pick<Product, 'title' | 'description' |'price' | 'category' | 'inventory'>>();

    const handleAddProduct = handleSubmit((data) => {

        alert(data);
    });

    return (
        <>
            <div className="backdrop" onClick={()=> setOpenProdutForm(false)}>
                {' '}
            </div>
            <div className="modal modal--add-product">
                <div className="modal-close" onClick={()=> {setOpenProdutForm(false)}}>&times;</div>
                <h2 className="header--center">Adcionar Produto</h2>
                <form onSubmit={handleAddProduct} className="form">
                    {/*Titutlo */}
                    <Input label='Título' placeholder='nome do produto' 
                        {...register('title',{
                            required: 'Título é obrigatório',
                            minLength : { value: 3, message: 'O título deve conter ao menos 3 caracteres!' }
                        })}
                        error={errors.title?.message}
                    />
                    {/*Descrição */}
                    <Input label='Descrição' name='descricao' placeholder='descrição do produto' />
                    {/*Preço */}
                    <Input label='Preço' type='number' name='preco' placeholder='preço do produto' />
                    {/*Imagem */}
                    <Input label='Imagem' name='imagem' placeholder='imagem do produto' />
                    {/*Categoria */}
                    <Input label='Categoria' name='categoria' placeholder='categoria do produto' />
                    {/*Estoque */}
                    <Input label='Estoque' type='number' name='estoque' placeholder='estoque do produto' />

                    <Button className='btn--orange' width='100%' style={{marginTop:'1rem'}}>Salvar</Button>
                </form>
            </div>
        </>
    );
}

export default AddAndEditProduct;