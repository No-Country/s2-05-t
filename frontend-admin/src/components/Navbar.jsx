import React,{useContext,useState} from 'react'
import { AdminContext } from '../context/AdminProvider';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Navbar () {
    const {admin,enviarToken} = useContext(AdminContext);
    const [state, setState] = useState(false)
    const [togle, setTogle] = useState(false)

    const navigate = useNavigate();
    console.log(admin)
    const handleClick = () => {
        navigate('/login')
    }
    const handleLogout = () => {
        enviarToken(null);
        setState(false);
        navigate('/')
    }

  return (
    <div className='flex flex-col   md:flex-row justify-around p-5  w-[100vw] shadow-md bg-slate-100 items-center'>
      <div >
        <h1 className='font-bold text-xl'>Website Administrator</h1>
      </div>

      <div className={togle? 'block md:block h-64 md:h-9 ':'hidden md:block' } >
        <ul className='flex flex-col space-y-6 mt-4 md:mt-0 md:space-y-0 md:flex-row md:space-x-11 md:font-medium md:items-center'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/products'>Productos</a>
          </li>
          <li>
            <a href='/users'>Clientes</a>
          </li>
          <li>
            <a href='/pedidos'>Pedidos</a>
          </li>
          <li className='relative '>
              {admin ? <button className='px-4 py-1 bg-green-500 rounded-sm cursor-pointer ' onClick={()=>setState(!state)} >{admin.nombre}<ArrowDropDownIcon/> </button>
              :
                <button className='px-4 py-1 bg-green-500 rounded-sm cursor-pointer' onClick={handleClick}>Login</button>}
              {state && (
                  <div className='absolute'>
                    <button className='px-4 py-1 mt-3 bg-red-400 rounded-sm cursor-pointer' onClick={handleLogout}>Salir</button>
                  </div>
              )}
          </li>
        </ul>
      </div>
          <div className='block md:hidden absolute right-5 top-5 cursor-pointer ' onClick={()=> setTogle(!togle)}>
          <DehazeIcon  />
          </div>
    </div>
  )
}
