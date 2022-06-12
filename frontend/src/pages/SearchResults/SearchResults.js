import CardSearchResults from '../../components/CardSearchResults/CardSearchResults'
import './SearchResults.css'

const allProducts = [
  {
    id: 1,
    image: '',
    title: 'Tiramisu'
  },
  {
    id: 2,
    image: '',
    title: 'Tortilla'
  },
  {
    id: 3,
    image: '',
    title: 'Hamburguesa'
  },
  {
    id: 4,
    image: '',
    title: 'Empanada'
  },
  {
    id: 5,
    image: '',
    title: 'Pizza'
  },
  {
    id: 6,
    image: '',
    title: 'Chocotorta'
  }
]

export default function SearchResults () {
  return (
    <section className='SearchResults'>
      <div className='SearchResults_header'>
        <div>
          <h2>Busqueda</h2>
          <span>Todos</span>
        </div>
        <div>
          <h2>Filtro</h2>
          <span>Recomendado</span>
        </div>
      </div>

      <section className='SearchResults_body'>
        {allProducts.map(product => (
          <CardSearchResults
            key={product.id}
            image='https://vinomanos.com/wp-content/uploads/2021/02/Tiramisu-min.jpg'
            id={product.id}
            title={product.title}
          />
        ))}
      </section>
    </section>
  )
}
