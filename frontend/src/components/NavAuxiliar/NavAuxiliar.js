import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './NavAuxiliar.css'

export default function NavAuxiliar ({ back, color = 'red' }) {
  const colorClass = `NavAuxiliar-${color}`

  return (
    <div className={`NavAuxiliar ${colorClass}`}>
      <Link to={back} className='Link'><ArrowBackIcon /> </Link>
    </div>
  )
}
