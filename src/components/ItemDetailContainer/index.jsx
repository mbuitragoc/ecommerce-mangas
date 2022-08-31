import { CircularProgress, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { ItemDetail } from "../ItemDetail";

const prodCollection = collection(db, "products");

const ItemDetailContainer = () => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

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
        setLoading(false);
        setListProduct(producto.find((prod) => prod.id === id));
      })
      .catch((err) => {
        console.log(err);
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
