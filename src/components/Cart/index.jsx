import {
  Button,
  Center,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../utils/firebase";

const Cart = () => {
  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [mail, setMail] = useState("");

  const handleChangeName = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setName(value);
  };
  const handleChangePhone = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setPhone(value);
  };
  const handleChangeMail = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setMail(value);
  };
  const handleConfirm = () => {
    let itemsInfo = cartList.map((item) => ({
      id: item.id,
      prod: item.product,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    }));

    const order = {
      items: itemsInfo,
      buyer: { name, phone, mail },
      date: serverTimestamp(),
      total: totalPrice(),
    };

    const orderCollection = collection(db, "orders");
    const consulta = addDoc(orderCollection, order);

    consulta
      .then((res) => {
        console.log(res.id);
      })
      .catch((error) => console.log(error));

    console.log(order);
  };

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
            <Input
              type="text"
              variant="flushed"
              placeholder="Nombre"
              onChange={handleChangeName}
              value={name}
            />

            <Input
              variant="flushed"
              placeholder="Telefono"
              onChange={handleChangePhone}
              value={phone}
            />

            <Input
              variant="flushed"
              placeholder="Mail"
              onChange={handleChangeMail}
              value={mail}
            />
            <Text>Total: ${totalPrice()}</Text>
            <HStack>
              <Button colorScheme="red" size="sm" onClick={() => cleanCart()}>
                Vaciar Carrito
              </Button>
              <Button colorScheme="green" size="sm" onClick={handleConfirm}>
                Comprar
              </Button>
            </HStack>
          </>
        )}
      </VStack>
    </Center>
  );
};

export { Cart };
