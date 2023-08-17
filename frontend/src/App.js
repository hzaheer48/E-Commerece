import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/home";
import Products from "./components/main/products";
import Checkout from "./components/main/checkout";
import About from "./components/main/checkout"
function App() { 
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
