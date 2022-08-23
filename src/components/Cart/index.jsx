import { Button, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

  return (
    <Center>
      <VStack>
        {cartList.map((prod) => (
          <HStack
            key={prod.id}
            p="6"
            bg="white"
            boxShadow="lg"
            rounded="md"
            spacing="10"
          >
            <Image src={prod.image} w="100px" />
            <Text as="b">{prod.product}</Text>
            <Text as="b">x{prod.quantity}</Text>
            <Text as="b">Precio : ${prod.price * prod.quantity}</Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => removeProduct(prod.id)}
            >
              X
            </Button>
          </HStack>
        ))}
        {cartList.length === 0 ? (
          <Text>Tu carrito esta vacio</Text>
        ) : (
          <>
            <Text>Total: ${totalPrice()}</Text>
            <Button colorScheme="red" size="sm" onClick={() => cleanCart()}>
              Vaciar Carrito
            </Button>
          </>
        )}
      </VStack>
    </Center>
  );
};

export { Cart };
