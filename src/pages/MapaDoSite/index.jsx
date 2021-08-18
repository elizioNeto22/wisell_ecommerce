import React from 'react'

import CustomLink from '../../components/Link'

import './styles.scss'
import './styles-mobile.scss'

const MapaDoSite = () => {
  return (
    <section className="mapa-do-site-wrapper">
      <div className="mapa-do-site-container">
        <div className="mapa-do-site-coluna">
          <ul>
            <li className="coluna-title">Atendimento</li>
            <li>
              <CustomLink>Atendimento pelo Whatsapp</CustomLink>
            </li>
            <li>
              <CustomLink>Acompanhar Pedido</CustomLink>
            </li>
            <li>
              <CustomLink>Chat Online</CustomLink>
            </li>
            <li>
              <CustomLink>Compre pelo Telefone</CustomLink>
            </li>
            <li>
              <CustomLink>Mande uma Mensagem</CustomLink>
            </li>
            <li>
              <CustomLink>Perguntas Frequentes</CustomLink>
            </li>
          </ul>
        </div>
        <div className="mapa-do-site-coluna">
          <ul>
            <li className="coluna-title">Departamentos</li>
            <li>
              <CustomLink>Agrícola</CustomLink>
            </li>
            <li>
              <CustomLink>Biológicos</CustomLink>
            </li>
            <li>
              <CustomLink>Fertilizantes</CustomLink>
            </li>
            <li>
              <CustomLink>Sementes</CustomLink>
            </li>
            <li>
              <CustomLink>Suplementos Minerais</CustomLink>
            </li>
            <li>
              <CustomLink>Ferragens</CustomLink>
            </li>
            <li>
              <CustomLink>Ordenha</CustomLink>
            </li>
            <li>
              <CustomLink>Jardinagem</CustomLink>
            </li>
            <li>
              <CustomLink>Selaria</CustomLink>
            </li>
            <li>
              <CustomLink>Insturumentos Veterinários</CustomLink>
            </li>
            <li>
              <CustomLink>Medicamentos</CustomLink>
            </li>
            <li>
              <CustomLink>Defensivos</CustomLink>
            </li>
            <li>
              <CustomLink>Pet</CustomLink>
            </li>
            <li>
              <CustomLink>Rações Balanceadas</CustomLink>
            </li>
            <li>
              <CustomLink>Ingredientes para Nutrição Animal</CustomLink>
            </li>
          </ul>
        </div>
        <div className="mapa-do-site-coluna">
          <ul>
            <li className="coluna-title">Como Trabalhamos</li>
            <li>
              <CustomLink>Como comprar</CustomLink>
            </li>
            <li>
              <CustomLink>Cupom de Desconto</CustomLink>
            </li>
            <li>
              <CustomLink>Entrega</CustomLink>
            </li>
            <li>
              <CustomLink>Mapa do Site</CustomLink>
            </li>
            <li>
              <CustomLink>Pagamento</CustomLink>
            </li>
            <li>
              <CustomLink>Política de Privacidade</CustomLink>
            </li>
            <li>
              <CustomLink>Termos e condições de uso do site</CustomLink>
            </li>
            <li>
              <CustomLink>Troca e Devolução</CustomLink>
            </li>
          </ul>
        </div>

        <div className="mapa-do-site-coluna">
          <ul>
            <li className="coluna-title">Serviços</li>
            <li>
              <CustomLink>Televenda</CustomLink>
            </li>
            <li>
              <CustomLink>Consórcio</CustomLink>
            </li>
            <li>
              <CustomLink>Venda Corporativa</CustomLink>
            </li>
            <li>
              <CustomLink>Meio Ambiente Pompílio</CustomLink>
            </li>
            <li>
              <CustomLink>Compre via Whatsapp</CustomLink>
            </li>
            <li>
              <CustomLink>Cartão Presente</CustomLink>
            </li>
          </ul>
        </div>
        <div className="mapa-do-site-coluna">
          <ul>
            <li className="coluna-title">Institucional</li>
            <li>
              <CustomLink>Quem somos</CustomLink>
            </li>
            <li>
              <CustomLink>Nossas Lojas</CustomLink>
            </li>
            <li>
              <CustomLink>Trabalhe Conosco</CustomLink>
            </li>
            <li>
              <CustomLink>Lojas</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MapaDoSite
