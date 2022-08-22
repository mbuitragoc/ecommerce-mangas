import {
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Select,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount";

const ItemDetail = ({ listProduct }) => {
  const {
    image,
    product,
    price,
    stock,
    category,
    description,
    config,
    initial,
  } = listProduct;

  const [isAdded, setIsAdded] = useState(false);

  const { addToCart, cartList } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(listProduct, quantity);
    setIsAdded(true);
  };

  console.log(addToCart);
  console.log(cartList);

  return (
    <Center boxShadow="lg" p="6" rounded="md" bg="white" m="20px auto">
      <Image src={image} alt={product} w="300px" />
      <VStack maxWidth="500px" align="left" mx="15px">
        <HStack>
          <Heading>{product}</Heading>
          <FaHeart cursor="pointer" size="20px" />
        </HStack>
        <Text className="bold" fontSize="2xl">
          ${price}
        </Text>
        <Tag colorScheme="blue">{category}</Tag>
        <Text>Stock: {stock}</Text>
        <Text>{description}</Text>
        {listProduct.chapters && (
          <List>
            {listProduct.chapters.map((element, index) => (
              <ListItem pl="6" key={index}>
                {element}
              </ListItem>
            ))}
          </List>
        )}
        {config.language && (
          <HStack>
            <Text>Language</Text>
            <Select>
              {config.language.map((lan, index) => (
                <option value={lan} key={`${lan}-${index}`}>
                  {lan}
                </option>
              ))}
            </Select>
          </HStack>
        )}
        {config.size && (
          <HStack>
            <Text>Size</Text>
            <Select>
              {config.size.map((lan, index) => (
                <option value={lan} key={`${lan}-${index}`}>
                  {lan}
                </option>
              ))}
            </Select>
          </HStack>
        )}
        {isAdded ? (
          <NavLink to="/cart">
            <Button colorScheme="green">Ir al carrito</Button>
          </NavLink>
        ) : (
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        )}
      </VStack>
    </Center>
  );
};

export { ItemDetail };
