import React from 'react'

import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { BiExit } from 'react-icons/bi'

import './styles.scss'

const Filtro = () => {
  return (
    <div class="row">
      <div class="col">
        <div class="tabs">
          <div class="tab">
            <input className="arrow" type="checkbox" id="fabricante" />
            <label class="tab-label" for="fabricante">
              Fabricante
            </label>
            <div class="tab-content">
              <ul>
                <li className="filter-item">
                  <label htmlFor="tramontina">Tramontina</label>
                  <input type="checkbox" name="tramontina" id="tramontina" />
                </li>
                <li className="filter-item">
                  <label htmlFor="agrimec">Agrimec</label>
                  <input type="checkbox" name="agrimec" id="agrimec" />
                </li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="marca" />
            <label class="tab-label" for="marca">
              Marca
            </label>
            <div class="tab-content">
              <ul>
                <li className="filter-item">
                  <label htmlFor="john-deere">John Deere</label>
                  <input type="checkbox" name="john-deere" id="john-deere" />
                </li>
                <li className="filter-item">
                  <label htmlFor="caterpillar">Caterpillar</label>
                  <input type="checkbox" name="caterpillar" id="caterpillar" />
                </li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="departamento" />
            <label class="tab-label" for="departamento">
              Departamento
            </label>
            <div class="tab-content">
              <ul>
                <li className="filter-item">
                  <label htmlFor="john-deere">John Deere</label>
                  <input type="checkbox" name="john-deere" id="john-deere" />
                </li>
                <li className="filter-item">
                  <label htmlFor="caterpillar">Caterpillar</label>
                  <input type="checkbox" name="caterpillar" id="caterpillar" />
                </li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="secao" />
            <label class="tab-label" for="secao">
              Seção
            </label>
            <div class="tab-content">
              <ul>
                <li>Tramontina</li>
                <li>Agrimec</li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="grupo" />
            <label class="tab-label" for="grupo">
              Grupo
            </label>
            <div class="tab-content">
              <ul>
                <li>Tramontina</li>
                <li>Agrimec</li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="subgrupo" />
            <label class="tab-label" for="subgrupo">
              Subgrupo
            </label>
            <div class="tab-content">
              <ul>
                <li>Tramontina</li>
                <li>Agrimec</li>
              </ul>
            </div>
          </div>

          <div class="tab">
            <input className="arrow" type="checkbox" id="itensPromocao" />
            <label class="tab-label" for="itensPromocao">
              Itens em Promção
            </label>
            <div class="tab-content">
              <ul>
                <li>Tramontina</li>
                <li>Agrimec</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filtro
