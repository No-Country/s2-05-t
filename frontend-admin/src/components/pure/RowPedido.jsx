import React from 'react'

export default function RowPedido ({ pedido, setId, index, setInformation }) {
  return (
    <tr
      className='hover:shadow-2xl hover:bg-slate-200 cursor-pointer'
      onClick={() => {
        setId(pedido._id)
      }}
    >
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='text-sm leading-5 text-gray-900'>{index + 1}</div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm leading-5 font-medium text-gray-900 capitalize'>
              {pedido.cliente.nombre} {pedido.cliente.apellido}
            </div>
          </div>
        </div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='text-sm leading-5 text-gray-900'>{pedido.estado}</div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <span className='px-2 inline-flex font-semibold leading-5  '>
          {new Date(pedido.createdAt).toLocaleDateString()}
        </span>
      </td>

      <td className=' py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
        ${pedido.total}
      </td>

      <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 text-sm leading-5 font-medium'>
        {pedido.productos.length}
      </td>
    </tr>
  )
}
