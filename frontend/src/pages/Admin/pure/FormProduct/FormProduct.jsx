import React, { useState } from 'react'
import './formstyle.css'

export default function FormProduct ({ handleCreateProduct, loading }) {
  const TOKEN = window.localStorage.getItem('token')

  const [product, setProduct] = useState({
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: '',
    tipo: ''
  })

  return (
    <div className='container-form'>
      <h2>Formulario para Agregar productos</h2>
      <form className='form-admin' onSubmit={() => handleCreateProduct(product, TOKEN)}>
        <div>

          <label>Nombre
          </label>
          <input
            required
            className='input-admin'
            type='text'
            name='nombre'
            value={product.nombre}
            onChange={e => setProduct({ ...product, nombre: e.target.value })}
          />
        </div>
        <div>
          <label>Precio
          </label>
          <input
            required
            className='input-admin'
            type='number'
            name='precio'
            value={product.precio}
            onChange={e => setProduct({ ...product, precio: +e.target.value })}
          />
        </div>
        <div>
          <label>Descripcion
          </label>
          <input
            required
            className='input-admin'
            type='text'
            name='descripcion'
            value={product.descripcion}
            onChange={e =>
              setProduct({ ...product, descripcion: e.target.value })}
          />
        </div>
        <div>
          <label>Imagen URL
          </label>
          <input
            required
            className='input-admin'
            type='text'
            name='imagen'
            value={product.imagen}
            onChange={e => setProduct({ ...product, imagen: e.target.value })}
          />
        </div>
        <div>
          <label>Tipo
          </label>
          <select
            name='tipo'
            defaultValue='OTRO'
            onChange={e => setProduct({ ...product, tipo: e.target.value })}
          >
            <option value='PLATO'>PLATO</option>
            <option value='BEBIDA'>BEBIDA</option>
            <option value='POSTRE'>POSTRE</option>
            <option value='OTRO'>Otro</option>
          </select>
        </div>
        <button type='submit'>{loading ? 'Loading...' : 'Agregar Producto'}</button>

      </form>
    </div>
  )
}
