import { Edit as EditIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import NavAuxiliar from '../../components/NavAuxiliar/NavAuxiliar'
import './Profile.css'

export default function Profile () {
  return (
    <>
      <NavAuxiliar back='/' color='red' />
      <section className='Profile'>
        <section className='Profile_header'>
          <div>
            <img src='https://media.istockphoto.com/vectors/coffee-or-tea-cup-cartoon-character-dancing-and-smiling-joyful-mug-vector-id1173348546' alt='avatar' />
            <EditIcon className='Profile_header-edit-avatar' />
          </div>
          <h1>Enzo Ramirez</h1>
        </section>
        <section className='Profile_body'>
          <div>
            <span>Email</span>
            <span>enzo@email.com</span>
          </div>
          <div>
            <span>Pedidos</span>
            <Link className='Link' to='/orders'>
              Ir a mis pedidos
            </Link>
          </div>
        </section>
        <section className='Profile_foot'>
          <button className='Profile_foot-button'>Cambiar datos</button>
        </section>
      </section>
    </>
  )
}
