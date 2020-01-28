import React from 'react'
import styled from 'styled-components'


const StyledBack = styled.div`
    height:100%;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    display:${props => props.show ? "block" : "none"}
`


export default (props) => {

    return (
        <StyledBack show={props.show} onClick={props.clicked}/>
    )
}