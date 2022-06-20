import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { AddShoppingCart } from '@mui/icons-material'
import './CarouselProductsGeneral.css'
import { Link } from 'react-router-dom'

export default function CarouselProductsGeneral ({ products, title, src }) {
  return (
    <div className='CarouselProductsGeneral'>
      <div className='CarouselProductsGeneral-container-title'>
        <h2 className='CarouselProductsGeneral-title'>{title || 'example'}</h2>
        <Link to={src || '/'} className='Link'>ver mas {'>'}</Link>
      </div>
      <Swiper
        className='listproductsslide'
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={1}
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {products.map(p => (
          <SwiperSlide key={p.id}>
            <figure className='card-general-product'>
              <header>
                <AddShoppingCart />
              </header>
              <img src={p.image} alt={p.title} />
              <figcaption>
                <div>
                  <span>{p.title}</span>
                </div>
                <div className='card-general-product_container-price'>
                  <span>$ {p.id}00</span>
                  <Link to={`productDetail/${p.id}`} className='button-buy'>
                    <span>comprar</span>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
