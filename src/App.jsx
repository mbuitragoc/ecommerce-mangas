import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import {Navbar} from "./components/NavBar"

function App() {

  return (
    <ChakraProvider>
      <Navbar />
      <Heading>Tienda de Mangas</Heading>
    </ChakraProvider>
  )  
}

export default App
