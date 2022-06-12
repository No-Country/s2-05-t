import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

export default function ModalEdit ({
  product,
  setProduct,
  loading,
  handleConfirmEdit,
  openModal,
  setOpenModal
}) {
  return (
    <div
      className={
        openModal
          ? 'absolute flex w-[100vw] h-[100vh] bg-blur-md z-10 backdrop-opacity-10 backdrop-invert bg-white/40 justify-center  p-6'
          : 'hidden'
      }
    >
      <div className='block w-full md:w-2/3 xl:w-1/3  absolute z-20 bg-white p-7 border rounded-lg'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-2xl'>Editar Producto</h2>
          <div className='cursor-pointer' onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </div>
        </div>
        <form
          className='  font-bold  m-7'
          onSubmit={e => {
            e.preventDefault()
            handleConfirmEdit(product._id)
          }}
        >
          <label>Nombre</label>
          <input
            className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
            required
            type='text'
            name='nombre'
            value={product.nombre}
            onChange={e => setProduct({ ...product, nombre: e.target.value })}
          />

          <label>Precio</label>
          <input
            className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
            required
            type='number'
            name='precio'
            value={product.precio}
            onChange={e => setProduct({ ...product, precio: +e.target.value })}
          />

          <div>
            <label>Descripcion</label>
            <input
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-96  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              required
              type='text'
              name='descripcion'
              value={product.descripcion}
              onChange={e =>
                setProduct({ ...product, descripcion: e.target.value })
              }
            />
          </div>
          <div>
            <label>Imagen URL</label>
            <input
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              required
              type='text'
              name='imagen'
              value={product.imagen}
              onChange={e => setProduct({ ...product, imagen: e.target.value })}
            />
          </div>
          <div>
            <label>Tipo</label>
            <select
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              name='tipo'
              defaultValue='OTRO'
              required
              onChange={e => setProduct({ ...product, tipo: e.target.value })}
            >
              <option value='PLATO'>PLATO</option>
              <option value='BEBIDA'>BEBIDA</option>
              <option value='POSTRE'>POSTRE</option>
              <option value='OTRO'>Otro</option>
            </select>
          </div>
          {/* el stado */}
          <div className='flex items-center'>
            <label>{product.estado ? 'DISPONIBLE' : 'NO DISPONIBLE'}</label>
            <input
              className='mx-3 my-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-72 h-5 flex items-center text-sm border-gray-300 rounded border'
              type='checkbox'
              name='estado'
              checked={product.estado}
              onChange={e =>
                setProduct({ ...product, estado: e.target.checked })
              }
            />
          </div>
          <button
            type='submit'
            className='w-[250px] mt-5 bg-indigo-500 py-3 px-5 rounded-md shadow-lg'
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Guardar'}
          </button>
        </form>
      </div>
    </div>
  )
}
