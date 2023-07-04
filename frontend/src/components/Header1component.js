import styles from '../myfile.module.css'; 
const Header1Component = () => {
  return (
     <div className={`text-white text-center py-2 ${styles.header}`}>
      <p className="m-0"><b>Free Shipping on Orders Above Rs 3000</b></p>
    </div>
  );
};

export default Header1Component;