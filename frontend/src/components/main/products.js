import Footer from '../actual/Footer';
import Header from '../actual/Header';
import Imagetext from '../actual/Imagetext';
import img1 from "../../images/wallpaper.jpg"
export default function Products(){
  return (
    <div>
      <Header/>
      <Imagetext imgdis={true} image={img1}/>
      <Footer/>
    </div>
  );
}

