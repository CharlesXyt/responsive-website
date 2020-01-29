import React from 'react'
import styled from 'styled-components'
import NavigationItems from '../../NavigationItems/NavigationItems'
import logo from '../../../assets/images/logo.png'

const StyledSideDrawer = styled.div`

    position:absolute;
    left:0;
    top:0;
    width:65%;
    min-width:250px;
    height:100vh;
    z-index:999;
    background-color:#eee;

    .logo-sidedrawer{
        margin-top:50px;
        text-align:center;

        img{
            width:10rem;
            height:10rem;
        }
    }
    

    transition: all .3s ease-in;

    transform:${props => props.show ? "translateX(0)" : "translateX(-100%)"}
`

export default (props) => {

    return (
        <StyledSideDrawer show={props.show}>
            <div className="logo-sidedrawer">
                <img src={logo} alt="logo sidedrawer"/>
            </div>
            
            <NavigationItems/>
        </StyledSideDrawer>
    )
}