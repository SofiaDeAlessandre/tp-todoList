import './App.css'
import Header from './components/Header'
import Cont from './components/Cont'
import Footer from './components/Footer'
import { Container } from '@mui/material'

function App() {
  
  return (
    <Container sx={{minHeigth:"100vh"}}>
     <Header />
     <Cont />
     <Footer />
    </Container>
  )
}

export default App
