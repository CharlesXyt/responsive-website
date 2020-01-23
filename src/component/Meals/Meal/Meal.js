import React from "react"
import styled from 'styled-components'


const StyledImg = styled.img`

    width:100%;
    height:auto;
    margin:0;
    transform: scale(1.15);
    opacity:0.7;
    transition: all .2s ease-in;

    &:hover{
        opacity:1;
        transform: scale(1.03);
    }
`

export default (props) => (
    <li>
        <StyledImg src={props.src} alt={props.alt}/>
    </li>
)