import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';
import Slider from './components/Slider';
import Imagetext from './components/Imagetext';
import Categories from './components/Categories';
import img1 from "./images/wallpaper.jpg"

function App() {
 
  return (
    <div>
      <Header/>
      <Card/>
      <Categories/>
      <Imagetext imgdis={true} image={img1}/>
      <Imagetext/>
      <Footer/>
      
    </div>
  );
}

export default App;
