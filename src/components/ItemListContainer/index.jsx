import { CircularProgress, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import { ItemCount } from "../ItemCount";
import { ItemList } from "../itemList";

const ItemListContainer = ({ greeting }) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => {
      if (category) {
        setLoading(false);
        setListProduct(res.filter((prod) => prod.category === category));
      } else {
        setLoading(false);
        setListProduct(res);
      }
    });
  }, [category]);

  return (
    <>
      <Heading>{greeting}</Heading>
      {!loading ? (
        <Grid templateColumns="repeat(3,1fr)">
          <ItemList listProduct={listProduct} />
        </Grid>
      ) : (
        <CircularProgress isIndeterminate color="green.300" />
      )}
      {/* <ItemCount initial={1} stock={5} onAdd={()=>{}}/> */}
    </>
  );
};

export { ItemListContainer };
