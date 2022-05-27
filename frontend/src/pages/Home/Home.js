import './Home.css'
import banner from '../../assets/img/banner.png'
import ListProductsSlide from '../../components/ListProductsSlide/ListProductsSlide'

const products = [
  {
    id: 1,
    title: 'Helados',
    image: 'https://deliciaskitchen.com/wp-content/uploads/2017/07/helado-casero-de-platano-con-frambuesas-y-albahaca.jpg'
  },
  {
    id: 2,
    title: 'Carnes',
    image: 'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/22/5f69c1aa42a38.r_d.735-595-0.jpeg'
  },
  {
    id: 3,
    title: 'Vegano',
    image: 'https://mfacdn.cachefly.net/chooseveg/sites/3/2019/02/arroz-coliflor.jpg'
  },
  {
    id: 4,
    title: 'Bebidas',
    image: 'https://i.blogs.es/c65e95/bebida5/450_1000.jpg'
  }
]

export default function Home () {
  return (
    <section className='home'>
      <h1 className='home-title'>App Food</h1>
      <h2 className='home-subtitle'>Busca y compra la comida que mas te guste</h2>
      <img src={banner} alt='banner' className='home-banner' />
      <div className='home-container-search'>
        <header className='home-container-search__header' />
        <br />
        <ListProductsSlide products={products} />
      </div>
    </section>
  )
}
