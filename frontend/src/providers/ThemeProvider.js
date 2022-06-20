import { createTheme, ThemeProvider as Theme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E6130D',
      contrastText: '#fff'
    },
    secondary: {
      main: '#10662E',
      light: '#25E668'
    },
    neutral: {
      main: '#FFD84D'
    }
  }
})

export default function ThemeProvider ({ children }) {
  <Theme theme={theme}>
    {children}
  </Theme>
}
