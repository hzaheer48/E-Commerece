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
        <div className='d-flex flex-nowrap'>
            <div className='m-5'>
                <Card2Component/>
            </div>
            <div className='m-5'>
                <Categories/>
                <div className='d-flex justify-content-between'>
                    <strong>Products (192)</strong>
                    <strong>Sort by</strong>
                </div>
                <div className='d-flex flex-wrap'>
                <Card1Component width={'40%'}/>
                <Card1Component width={'40%'}/>
                </div>
                <div className='d-flex flex-wrap'>
                <Card1Component width={'40%'}/>
                <Card1Component width={'40%'}/>
                </div>
            </div>
        </div>
    )
}