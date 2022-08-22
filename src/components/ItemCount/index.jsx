import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => count < stock && setCount(count + 1);

  const decrease = () => count > initial && setCount(count - 1);

  const handleClink = () => onAdd(count);

  return (
    <HStack>
      <Button variant="ghost" colorScheme="red" size="sm" onClick={decrease}>
        -
      </Button>
      <Text>{count}</Text>
      <Button variant="ghost" colorScheme="red" size="sm" onClick={increase}>
        +
      </Button>
      <Button colorScheme="red" size="sm" onClick={handleClink}>
        Agregar al carrito
      </Button>
    </HStack>
  );
};

export { ItemCount };
