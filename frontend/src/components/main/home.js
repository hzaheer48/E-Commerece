import Footer from '../actual/Footer';
import Header from '../actual/Header';
import Slider from '../actual/Slider';
import Card from '../actual/Card';
import Imagetext from '../actual/Imagetext';
import Categories from '../actual/Categories';
import img1 from "../../images/slider5.jpg"
import Testimonial from '../actual/Testimonial';
export default function Home(){
  return (
    <div>
      <Header/>
      <Slider/>
      <Card/>
      <Categories categoryWidth={'300px'}/>
      <Imagetext imgdis={true} image={img1}/>
      <Card/>
      <Imagetext/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

