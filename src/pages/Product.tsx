import { useParams } from "react-router-dom";

export function Product() {
  let { productID } = useParams();
  return <h1> Produto Nº: {productID} </h1>;
}
