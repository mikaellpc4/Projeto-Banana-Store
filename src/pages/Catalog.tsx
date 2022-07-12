import { useParams } from "react-router-dom";

export function Catalog() {
  let { filters } = useParams();
  return <h1> Catalogo com filtros: {filters} </h1>;
}
