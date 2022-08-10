import {
  Button,
  Image,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const ItemDetail = ({ listProduct }) => {
  return (
    <VStack
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      m="15px"
      minWidth="275px"
    >
      <Image src={listProduct.image} alt={listProduct.product} w="300px" />
      <Text>{listProduct.product}</Text>
      <Text>${listProduct.price}</Text>
      <Tag>{listProduct.category}</Tag>
      <Text>{listProduct.description}</Text>
      <UnorderedList>
        {listProduct.chapters.map((element, index) => (
          <ListItem key={index}>{element}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export { ItemDetail };
