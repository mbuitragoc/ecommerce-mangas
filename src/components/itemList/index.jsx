import { Item } from "../item";

const ItemList = ({ listProduct }) => {
  return (
    <>
      {listProduct.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
};

export { ItemList };
