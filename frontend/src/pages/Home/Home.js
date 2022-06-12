import './Home.css'
import banner from '../../assets/img/banner.png'
import ListProductsSlide from '../../components/ListProductsSlide/ListProductsSlide'
import CarouselProductsGeneral from '../../components/CarouselProductsGeneral/CarouselProductsGeneral'

const products = [
  {
    id: 1,
    title: 'Helados',
    image:
      'https://deliciaskitchen.com/wp-content/uploads/2017/07/helado-casero-de-platano-con-frambuesas-y-albahaca.jpg'
  },
  {
    id: 2,
    title: 'Carnes',
    image:
      'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/22/5f69c1aa42a38.r_d.735-595-0.jpeg'
  },
  {
    id: 3,
    title: 'Vegano',
    image:
      'https://mfacdn.cachefly.net/chooseveg/sites/3/2019/02/arroz-coliflor.jpg'
  },
  {
    id: 4,
    title: 'Bebidas',
    image: 'https://i.blogs.es/c65e95/bebida5/450_1000.jpg'
  },
  {
    id: 5,
    title: 'Hamburguesas',
    image:
      'https://st3.depositphotos.com/1003543/15151/i/950/depositphotos_151511496-stock-photo-two-freshly-made-burgers.jpg'
  }
]

export default function Home () {
  return (
    <section className='home'>
      <div className='container-home-title'>
        <h1
          style={{
            fontSize: '25px',
            color: 'var(--third-color)',
            margin: '0',
            marginTop: '1em'
          }}
        >
          En
        </h1>
        <h1 className='home-title'>AppFood</h1>
        <h2 className='home-subtitle'>
          Busca y comprá la comida que más te guste
        </h2>
      </div>
      <img src={banner} alt='banner' className='home-banner' />
      <div className='home-container-search'>
        <ListProductsSlide products={products} />
      </div>
      <hr className='separator' />
      <section>
        <CarouselProductsGeneral
          products={products}
          title='Recomendados'
          src='/search/recommended'
        />
        <CarouselProductsGeneral
          products={products}
          title='Populares'
          src='/search/most-popular'
        />
      </section>
    </section>
  )
}
