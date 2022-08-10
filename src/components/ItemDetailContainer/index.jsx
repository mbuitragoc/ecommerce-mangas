import { CircularProgress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import { ItemDetail } from "../ItemDetail";

const ItemDetailContainer = () => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => {
      setLoading(false);
      setListProduct(res.find((item) => item.id === 2));
    });
  }, []);

  return (
    <>
      {!loading ? (
        <ItemDetail listProduct={listProduct} />
      ) : (
        <CircularProgress isIndeterminate color="green.300" />
      )}
    </>
  );
};

export { ItemDetailContainer };
