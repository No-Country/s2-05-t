import React, { useState, useEffect } from 'react'

import { getProducts } from '../../services/producto.services'

export default function Carrito () {
  const [productos, setProductos] = useState([])

  const agregarProducto = producto => {
    setProductos([...productos, producto])
  }
  console.log(productos)
  useEffect(() => {
    getProducts().then(res => {
      setProductos(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>Carrito</h1>

      <button onClick={() => agregarProducto('Camiseta')}>
        Agregar Camiseta
      </button>
    </div>
  )
}
