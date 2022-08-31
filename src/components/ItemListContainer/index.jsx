import { CircularProgress, Grid, Heading } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { ItemList } from "../itemList";

const prodCollection = collection(db, "products");

const ItemListContainer = ({ greeting }) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const consulta = getDocs(prodCollection);
    setLoading(true);

    consulta
      .then((snapshot) => {
        const producto = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        if (category) {
          setLoading(false);
          setListProduct(producto.filter((prod) => prod.category === category));
        } else {
          setLoading(false);
          setListProduct(producto);
        }
      })
      .catch((err) => {
        console.log(err);
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
    </>
  );
};

export { ItemListContainer };
