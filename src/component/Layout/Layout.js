import React,{useState} from 'react'
import SideDrawer from './SideDrawer/SideDrawer'
import Header from '../Header/Header'
import BackDrop from './BackDrop/BackDrop';

export default (props) => {

    const [showSideDrawer,setShowSideDrawer] = useState(false);

    const toggleClick = () => {
        setShowSideDrawer((prevShow) => !prevShow)
    }

    return (
        <React.Fragment>
            <SideDrawer show={showSideDrawer} toggleClick={toggleClick}/>
            <BackDrop show={showSideDrawer} clicked={toggleClick}/>
            <Header toggleClick={toggleClick}/>
            {props.children}
        </React.Fragment>
    )
}