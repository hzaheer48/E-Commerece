import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/home";
import Products from "./components/main/products";
import Checkout from "./components/main/checkout";
import Contact from "./components/main/contact"
function App() { 
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
