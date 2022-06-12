import React from 'react'
import '../Burgers.css'

const Burger = ({ burger, cart, setCart, burgers }) => {
  const { nombre, precio, image, id } = burger

  const addBurger = id => {
    const burger = burgers.filter(burger => burger.id === id)
    setCart([...cart, ...burger])
    console.log(cart.length)
  }
  const delBurger = id => {
    const burgers = cart.filter(burger => burger.id !== id)
    setCart(burgers)
  }

  return (
    <ul className='container__content__burgers'>
      <img
        className='container__content__burgers--image'
        src={image}
        alt='img'
      />
      <li className='container__content__burgers--nombre'>{nombre}</li>
      <li className='container__content__burgers--precio'>${precio}</li>
      {burgers && burgers ? (
        <button
          className='container__content__burgers--btnAdd'
          type='button'
          onClick={() => addBurger(id)}
        >
          {' '}
          Agregar +
        </button>
      ) : (
        <div>
          <button
            className='container__content__burgers--btnDel'
            type='button'
            onClick={() => delBurger(id)}
          >
            {' '}
            Eliminar
          </button>
          <button
            className='contatiner__content__burgers--btnAdd'
            type='button'
            onClick={() => delBurger(id)}
          >
            Confirmar
          </button>
        </div>
      )}
    </ul>
  )
}

export default Burger
