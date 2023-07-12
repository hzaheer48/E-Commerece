import Card2Component from '../helper/Card2Component';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Categories from './Categories';
import { useState,useEffect } from 'react';
import styles from "../../css/myfile.module.css";
import {MDBCol, MDBContainer, MDBIcon, MDBRow} from 'mdb-react-ui-kit';
import Card1Component from '../helper/Card1Component';
export default function FilterBar(){
    const { width } = useWindowDimensions();
    const [isExpanded, setExpanded] = useState(false);
    const [hamburgerButton, setHamburgerButton] = useState(true);
    const [rotateButtons, setRotateButtons] = useState(false);
    const rotate = rotateButtons ? "rotate(360deg)" : "rotate(0)"
    const handleToggleClick = () => {
        setRotateButtons(!rotateButtons);
        setHamburgerButton(!hamburgerButton);
      };
    
    useEffect(() => {
        if (width <= 768) {
          setExpanded(true);
        } else {
          setExpanded(false);
        }
      }, [width]);
    return(
        <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className='col-3'>
                        <Card2Component width="300px"></Card2Component>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol>
                                    <Categories/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                    <MDBCol className='d-flex justify-content-between'>
                                        <strong>Products (192)</strong>
                                        <strong>Sort by</strong>
                                        </MDBCol>
                            </MDBRow>
                            <MDBRow>
                        <MDBCol >
                            <Card1Component width={'75%'}></Card1Component>
                        </MDBCol>
                        <MDBCol >
                            <Card1Component width={'75%'}></Card1Component>
                        </MDBCol>
                    </MDBRow>
                            
                        </MDBCol>
                    </MDBRow>
    
                </MDBContainer>
                
        </div>
    )
}