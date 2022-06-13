import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import ItemCarousel from '../../components/ItemCarousel/ItemCarousel'
import './ListProductsSlide.css'
import { useNavigate } from 'react-router-dom'

export default function ListProductsSlide ({ products }) {
  const navigate = useNavigate()
  const handleDetail = title => {
    title === 'Hamburguesas' && navigate('/burgers')
  }
  return (
    <div>
      <Swiper
        className='listproductsslide'
        slidesPerView={3}
        spaceBetween={-20}
        slidesPerGroup={1}
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {products && products.length
          ? products.map((el, i) => (
              <SwiperSlide
                onClick={() => {
                  handleDetail(el.title)
                }}
                className='productslide'
                key={i}
              >
                <ItemCarousel title={el.title} image={el.image} />
              </SwiperSlide>
            ))
          : ''}
      </Swiper>
    </div>
  )
}
