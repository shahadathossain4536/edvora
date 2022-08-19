import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Users from "./components/Users";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/order" element={<Order orders={orders} />} />
          <Route path="/user" element={<Users users={users} />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
