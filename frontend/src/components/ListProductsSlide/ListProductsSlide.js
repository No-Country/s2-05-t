import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import ItemCarousel from '../../components/ItemCarousel/ItemCarousel'
import './ListProductsSlide.css'

export default function ListProductsSlide ({ products }) {
  return (
    <div>
      <Swiper
        className='listproductsslide'
        slidesPerView={4}
        spaceBetween={15}
        slidesPerGroup={2}
        loop
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {products && products.length
          ? products.map(el => (
            <SwiperSlide className='productslide' key={el.id}>
              <ItemCarousel title={el.title} image={el.image} />
            </SwiperSlide>
          ))
          : ''}
      </Swiper>
    </div>
  )
}
