import { ChakraProvider, Heading } from "@chakra-ui/react";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Heading>Tienda de Mangas</Heading>
      <ItemListContainer greeting="Bienvenidos a mi tienda 😊" />
    </ChakraProvider>
  );
}

export default App;
