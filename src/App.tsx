import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { Theme } from "./styles/theme"
import { GlobalStyle } from './styles/GlobalStyle' 
import { Router } from "./Router"

function App() {
  return (
   <>
    <ThemeProvider theme={Theme}>
     <BrowserRouter>
      <Router/>
      <GlobalStyle/>
     </BrowserRouter>
    </ThemeProvider>
   </>
  )
}

export default App
