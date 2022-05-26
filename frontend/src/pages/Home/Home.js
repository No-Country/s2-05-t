import './Home.css'
import banner from '../../assets/img/banner.png'

export default function Home () {
  return (
    <section className='home'>
      <h1 className='home-title'>App Food</h1>
      <h2 className='home-subtitle'>Busca y compra la comida que mas te guste</h2>
      <img src={banner} alt='banner' className='home-banner' />
      <div className='home-container-search'>
        <header className='home-container-search__header' />
        <div />
      </div>
    </section>
  )
}
