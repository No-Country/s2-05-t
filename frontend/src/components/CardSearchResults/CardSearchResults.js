import { Link } from 'react-router-dom'
import { AddShoppingCart } from '@mui/icons-material'
import './CardSearchResults.css'

export default function CardSearchResults ({ image, id, title }) {
  return (
    <figure className='CardSearchResults'>
      <header>
        <AddShoppingCart />
      </header>
      <img src={image} alt={title} />
      <figcaption>
        <div>
          <span>{title}</span>
        </div>
        <div className='CardSearchResults_container-price'>
          <span>$ {id}00</span>
          <Link to={`productDetail/${id}`} className='CardSearchResults_button-buy'>
            <span>comprar</span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}
