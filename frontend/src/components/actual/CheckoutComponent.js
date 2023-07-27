import React, { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import CartComponent from '../helper/CartComponent';
import InformationComponent from '../helper/InformationComponent';
import ShippingComponent from '../helper/ShippingComponent';
import PaymentComponent from '../helper/PaymentComponent';
import styles from "../../css/myfile.module.css";

function Checkout() {
  const [activeComponent, setActiveComponent] = useState('information');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'information':
        return <InformationComponent />;
      case 'shipping':
        return <ShippingComponent />;
      case 'payment':
        return <PaymentComponent />;
      default:
        return <InformationComponent />;
    }
  };

  return (
    <div className="container-fluid contaier -x;m-0">
      <div className="row">
        <div className="col-lg-7 col-md-7 m-0 mx-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row justify-content-center align-items-center mt-5">
                <div className="col-md-6">
                  <h3>Your Company Name</h3>
                </div>
              </div>
              <div className="cart-link-navigation d-flex justify-content-center mt-4">
                <div className='d-flex align-items-center small'>
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Cart
                  </a>
                  <MDBIcon
                    icon="angle-right"
                    className="m-1 mx-2 fa-lg"
                    style={{ color: '#60676F' }}
                  />
                </div>
                <div
                  className={`d-flex align-items-center small ${
                    activeComponent === 'information' ? styles.activeLink : ''
                  }`}
                  onClick={() => setActiveComponent('information')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Information
                  </a>
                  <MDBIcon
                    icon="angle-right"
                    className="m-1 mx-2 fa-lg"
                    style={{ color: '#60676F' }}
                  />
                </div>
                <div
                  className={`d-flex align-items-center small ${
                    activeComponent === 'shipping' ? styles.activeLink : ''
                  }`}
                  onClick={() => setActiveComponent('shipping')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Shipping
                  </a>
                  <MDBIcon
                    icon="angle-right"
                    className="m-1 mx-2 fa-lg"
                    style={{ color: '#60676F' }}
                  />
                </div>
                <div
                  className={`d-flex align-items-center small ${
                    activeComponent === 'payment' ? styles.activeLink : ''
                  }`}
                  onClick={() => setActiveComponent('payment')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Payments
                  </a>
                </div>
              </div>
              {renderActiveComponent()}
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-5 m-0 bg-light">
          <CartComponent />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
