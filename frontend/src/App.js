import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Products from './Views/Products/Products';
import Home from './Views/Home/Home';
import ProductDetails from './Views/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
