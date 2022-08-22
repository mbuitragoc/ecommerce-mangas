import { HStack, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget";

const Navbar = () => {
  return (
    <HStack as="nav">
      <NavLink to="/">
        <img src={logo} alt="logo-Manga-store" width="100px" />
      </NavLink>
      <Spacer />
      <HStack>
        <NavLink to="category/Manga">Mangas</NavLink>
        <NavLink to="category/Colecciones">Colecciones</NavLink>
        <NavLink to="category/Figuras">Figuras</NavLink>
        <CartWidget />
      </HStack>
    </HStack>
  );
};

export { Navbar };
