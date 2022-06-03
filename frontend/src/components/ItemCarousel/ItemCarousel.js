import './ItemCarousel.css'

export default function ItemCarousel ({ title, image }) {
  return (
    <figure className='itemCarousel'>
      {/* <div className='background-transparent' /> */}
      <img src={image || 'https://picsum.photos/200/300'} alt={title || 'example'} className='itemCarousel-img' />
      <h1 className='itemCarousel-title'>{title || 'example'}</h1>
    </figure>
  )
}
