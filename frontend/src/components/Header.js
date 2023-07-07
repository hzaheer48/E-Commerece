import Header1Component from './helper/Header1component';
import Header2Component from './helper/Header2component';
import Slider from './Slider';

function Header() {
    return (
      <div>
        <Header1Component/> 
        <Header2Component/>
        {/* <Slider/> */}
      </div>
    );
  }
  
  export default Header;