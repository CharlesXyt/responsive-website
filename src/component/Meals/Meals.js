import React from 'react'
import Meal from './Meal/Meal'
import styled from 'styled-components'
import image_1 from "../../assets/images/1.jpg" 
import image_2 from "../../assets/images/2.jpg" 
import image_3 from "../../assets/images/3.jpg" 
import image_4 from "../../assets/images/4.jpg" 
import image_5 from "../../assets/images/5.jpg" 
import image_6 from "../../assets/images/6.jpg" 
import image_7 from "../../assets/images/7.jpg" 
import image_8 from "../../assets/images/8.jpg" 

const StyledImages = styled.ul`
    display:flex;
    width:100%;
    padding-left:0;
    list-style:none;
    flex-wrap:wrap;
    margin-bottom:0px;
    li {
        width:25%;
        height:auto;
        margin:0;
        background-color:black;
        overflow:hidden;

        @media only screen and (max-width:767px){
            width:50%;
        }
    }
`


export default () => {

    return (
        <StyledImages>
            <Meal src={image_1} alt="1"/>
            <Meal src={image_2} alt="2"/>
            <Meal src={image_3} alt="3"/>
            <Meal src={image_4} alt="4"/>
            <Meal src={image_5} alt="5"/>
            <Meal src={image_6} alt="6"/>
            <Meal src={image_7} alt="7"/>
            <Meal src={image_8} alt="9"/>
        </StyledImages>
    )
}