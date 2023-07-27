import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/home";
import Products from "./components/main/products";
import About from "./components/main/About"
function App() { 
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
