import { useState } from 'react'
import { Box, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

const pages = ['Comidas', 'Ayuda', 'Preguntas frecuentes']

export default function MenuPages () {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='neutral'
        sx={{ transform: 'rotate(180)' }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          color: 'primary.main',
          y: 10,
          display: { xs: 'block', md: 'block' }
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ bgcolor: 'primary.main' }}>
            <Typography textAlign='center' color='primary.contrastText'>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
