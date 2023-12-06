import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import LogIn from './components/LogIn';
import Shop from './components/Shop';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
