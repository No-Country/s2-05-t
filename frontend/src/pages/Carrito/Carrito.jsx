import React, { useState } from 'react'

export default function Carrito () {
  const [productos, setProductos] = useState([])

  const agregarProducto = producto => {
    setProductos([...productos, producto])
  }

  return (
    <div>
      <h1>Carrito</h1>

      <button onClick={() => agregarProducto('Camiseta')}>
        Agregar Camiseta
      </button>
    </div>
  )
}
