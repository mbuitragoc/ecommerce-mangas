import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"

function App() {

  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi tienda 😊"/>
      <Heading>Tienda de Mangas</Heading>
    </ChakraProvider>
  )  
}

export default App
