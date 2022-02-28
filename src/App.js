import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Product from "./Pages/Product"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/products-sample/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
