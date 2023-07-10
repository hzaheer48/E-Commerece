import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/home";
import Products from "./components/main/products";

function App() { 
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
