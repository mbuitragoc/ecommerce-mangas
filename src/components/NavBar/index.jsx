import { HStack, Spacer, Link} from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return(
    <HStack>
      <img src={logo} alt="logo-Manga-store" width="100px"/>
      <Spacer/>
      <HStack>
        <Link>Mangas</Link>
        <Link>Colecciones</Link>
        <Link>Figuras</Link>
        <Spacer/>
        <Link>Carrito</Link>
      </HStack>
    </HStack>
  )
}

export {Navbar}