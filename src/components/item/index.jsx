import { Button, Image, Link, Text, VStack } from "@chakra-ui/react";

const Item = ({ product }) => {
  console.log(product);
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
        <Link>Ver Detalles</Link>
      </Button>
    </VStack>
  );
};

export { Item };
