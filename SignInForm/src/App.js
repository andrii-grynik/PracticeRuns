import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from './Register';
import Login from './Login';
import './index'
import './App.css'
import Services from './components/pages/Services';
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>  
      </Router>
    </>
  );
}

export default App;
