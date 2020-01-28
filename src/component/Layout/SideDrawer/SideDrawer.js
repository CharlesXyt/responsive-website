import React from 'react'
import styled from 'styled-components'
import NavigationItems from '../../NavigationItems/NavigationItems'


const StyledSideDrawer = styled.div`

    position:absolute;
    left:0;
    top:0;
    width:65%;
    min-width:250px;
    height:100vh;
    z-index:999;
    background-color:white;

    p{
        color:red;
    }

    transition: all .3s ease-in;

    transform:${props => props.show ? "translateX(0)" : "translateX(-100%)"}
`

export default (props) => {

    return (
        <StyledSideDrawer show={props.show}>
            <NavigationItems/>
        </StyledSideDrawer>
    )
}