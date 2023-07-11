import Card2Component from '../helper/Card2Component';
import ProductCategories from "../actual/Productcategories"
export default function FilterBar(){
    return(
        <div className='d-flex align-items-center w-100 '>
            <div className='d-inline-block'>
            <Card2Component width="300px"></Card2Component>
            </div>
          <div className='d-inline-block'>
          <ProductCategories width="700px"/>
          </div>  
        </div>
    )
}