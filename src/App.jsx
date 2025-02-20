import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import OrderList from './pages/OrderList.jsx';
import OrderDetail from "./pages/OrderDetail.jsx";
import Favorites from './pages/Favorites.jsx';
import CouponRegister from "./pages/CouponRegister.jsx";
import Profile from "./pages/Profile.jsx";
import Coupons from "./components/Coupons.jsx";
import Orders from "./components/Orders.jsx";

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orders" element={<OrderList/>}/>
            <Route path="/order/form" element={<OrderForm />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/coupon" element={<CouponRegister/>}/>
            <Route path="/profile" element={< Profile />}>
              <Route path="orders" element={<Orders />} />
              <Route path="coupons" element={<Coupons />} />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
