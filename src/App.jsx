import { ChakraProvider, Heading } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { Cart } from "./components/Cart";
import { Item } from "./components/item";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/NavBar";
import { CartContextProvider } from "./context/CartContext";
import "./utils/firebase";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a mi tienda 😊" />
              }
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:category/product/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <ToastContainer />
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
