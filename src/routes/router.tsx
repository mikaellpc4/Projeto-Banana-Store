import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import '../style/App.css'

import { Home } from "../pages/Home"
import { Catalog } from "../pages/Catalog"
import { Product } from "../pages/Product"
import { Cart } from "../pages/Cart"
import { ErroPage } from "../pages/ErroPage"
import { Profile } from "../pages/profile"
import { Header } from "../pages/parts/header"
import { Footer } from "../pages/parts/footer"

export function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Product/:productID" element={<Product />} />
                <Route path="/Product" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="*" element={<ErroPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}