import React from 'react'

export default function ProductoCarrito ({ name, price, onAdd, img }) {
  const [cantidad, setCantidad] = useState(0)
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{cantidad}</p>
    </div>
  )
}
