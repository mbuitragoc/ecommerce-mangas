import { HStack, Spacer, Link} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import {CartWidget} from "../CartWidget"

const Navbar = () => {
  return(
    <HStack as="nav">
      <img src={logo} alt="logo-Manga-store" width="100px"/>
      <Spacer/>
      <HStack>
        <Link>Mangas</Link>
        <Link>Colecciones</Link>
        <Link>Figuras</Link>
        <Spacer/>
        <CartWidget/>
      </HStack>
    </HStack>
  )
}

export {Navbar}