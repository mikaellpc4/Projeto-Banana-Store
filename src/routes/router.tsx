import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import light from "../assets/styles/themes/light";

import Home from "../pages/home";
import { Catalog } from "../pages/catalog";
import { Product } from "../pages/product";
import { Cart } from "../pages/cart";
import { ErroPage } from "../pages/errorPage";
import { Profile } from "../pages/profile";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../assets/styles/global";

export function AppRoutes() {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:filters" element={<Catalog />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/product" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErroPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
