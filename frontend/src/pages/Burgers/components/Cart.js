import React from 'react'
import Burger from './Burger'
import '../Burgers.css'

function Cart ({ cart, setCart }) {
  const viewCart = () => {
    document.querySelector(
      'div.container__header__cartDiv--list'
    ).style.display = 'none'
      ? (document.querySelector(
          'div.container__header__cartDiv--list'
        ).style.display = 'flex')
      : (document.querySelector(
          'div.container__header__cartDiv--list'
        ).style.display = 'none')
  }

  const closeDiv = () => {
    document.querySelector(
      'div.container__header__cartDiv--list'
    ).style.display = 'none'
  }

  return (
    <>
      <div className='container__header__cartDiv'>
        <p className='container__header__cartDiv--count'>{cart.length}</p>
        <button
          className='container__header__cartDiv--btnCart'
          type='button'
          onClick={() => viewCart()}
        >
          {}
        </button>
      </div>
      <div className='container__header__cartDiv--list'>
        <button
          className='container__content__burgers--btnClose'
          type='button'
          onClick={() => closeDiv()}
        >
          X
        </button>
        {cart &&
          cart.length > 0 &&
          cart.map(burger => (
            <Burger
              key={burger.id}
              burger={burger}
              cart={cart}
              setCart={setCart}
            />
          ))}
        {cart.length === 0 && <p>No hay nada en el carrito</p>}
      </div>
    </>
  )
}

export default Cart
