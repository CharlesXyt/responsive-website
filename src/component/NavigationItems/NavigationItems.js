import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styled from 'styled-components'

const Styledul = styled.ul`
    list-style:none;
    display:flex;
    justify-content:space-between;
    margin-right:20px;
    li {
        margin:0px 20px;
        a {
            
            &:link,&:visited{
                color:white;
                text-decoration:none;
                text-transform:uppercase;
                font-size:.9rem;
                border-bottom:"2px solid transparent"
            }

            &:active,&:hover{
                padding:"8px";
                border-bottom:"2px solid #e67e22"
            }
            
        }
    }
`



export default (props) => {

    return (
        <Styledul>
            <NavigationItem path="/">Food delivery</NavigationItem>
            <NavigationItem path="/how">How it works</NavigationItem>
            <NavigationItem path="/cities">Our cities</NavigationItem>
            <NavigationItem path="/signup">Sign up</NavigationItem>
        </Styledul>
    )
}