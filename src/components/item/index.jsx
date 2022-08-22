import {
  AspectRatio,
  Button,
  Grid,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Grid
      boxShadow="lg"
      p="4"
      rounded="md"
      bg="white"
      m="15px"
      minWidth="275px"
      gap="2"
      justifyContent="center"
    >
      <Image
        src={product.image}
        alt={product.product}
        objectFit="contain"
        h="400px"
        maxWidth="300px"
      />
      <Text align="center" as="b">
        {product.product}
      </Text>
      <Text align="center">${product.price}</Text>
      <Button colorScheme="red" size="xs">
        <NavLink as="link" to={`product/${product.id}`}>
          Ver Detalles
        </NavLink>
      </Button>
    </Grid>
  );
};

export { Item };
