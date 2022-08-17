import { Button, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <VStack
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      m="15px"
      minWidth="275px"
    >
      <Image src={product.image} alt={product.product} w="300px" />
      <Text>{product.product}</Text>
      <Text>${product.price}</Text>
      <Button colorScheme="red" size="xs">
        <NavLink to={`product/${product.id}`}>
          <Link>Ver Detalles</Link>
        </NavLink>
      </Button>
    </VStack>
  );
};

export { Item };
