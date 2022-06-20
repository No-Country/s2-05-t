import MenuProfile from '../MenuProfile/MenuProfile'
import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material'
// import { Adb as AdbIcon } from '@mui/icons-material'
import MenuPages from '../MenuPages/MenuPages'
export default function Navbar () {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MenuPages />
          <Container sx={{ alignSelf: 'center', flexGrow: 1, display: 'flex', justifyContent: 'center', gap: '1em' }}>
            <Avatar alt='logo' src='https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160710025/60037762-ubicaci%C3%B3n-del-restaurante-pin-aislados-icono-del-dise%C3%B1o-ejemplo-gr%C3%A1fico-del-vector.jpg' />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                display: { xs: 'flex', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '1px',
                alignItems: 'center',
                color: 'primary.contrastText',
                textDecoration: 'none'
              }}
            >
              AppFood
            </Typography>
          </Container>
          <MenuProfile />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
