import { useState } from 'react'
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MenuProfile () {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='user default' src='https://media.istockphoto.com/vectors/coffee-or-tea-cup-cartoon-character-dancing-and-smiling-joyful-mug-vector-id1173348546' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '35px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key='1' sx={{ bgcolor: 'primary.main', color: 'neutral.main' }} onClick={handleCloseUserMenu}>
          <Link to='/login' className='Link'>Iniciar Sesión</Link>
        </MenuItem>
        <MenuItem key='2' sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }} onClick={handleCloseUserMenu}>
          <Link to='/cart' className='Link'> Carrito de compras </Link>
        </MenuItem>
        <MenuItem key='2' sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }} onClick={handleCloseUserMenu}>
          <Link to='/profile' className='Link'> Mi perfil </Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}
