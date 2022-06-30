import { Link } from "react-router-dom"

export function Header() {
    return <nav>
        <Link to="/"> Home </Link>
        <Link to="/cart"> Carrinho </Link>
        <Link to="/catalog"> Catalogo </Link>
        <Link to="/product/123"> Produto 123 </Link>
    </nav>
}