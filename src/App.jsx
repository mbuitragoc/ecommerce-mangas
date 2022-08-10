import { ChakraProvider, Heading } from "@chakra-ui/react";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Heading>Tienda de Mangas</Heading>
      {/* <ItemListContainer greeting="Bienvenidos a mi tienda 😊" /> */}
      <ItemDetailContainer />
    </ChakraProvider>
  );
}

export default App;
