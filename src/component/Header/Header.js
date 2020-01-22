import React from 'react'
import {
    StyledHeader,
    StyledNav
} from './StyledHeader'
import LinkButton from '../Button/LinkButton'
import logo from '../../assets/images/logo-white.png'
import NavigationItems from '../NavigationItems/NavigationItems'

const header = () => {
    return (

        
        <StyledHeader>
            <StyledNav>
                <img src={logo} alt="omnifood logo"/>
                <NavigationItems/>
            </StyledNav>
            <div className="text-hero-all">
                <h1>Goodbye junk food.<br/> Hello super healthy meals.</h1>
                <div className="text-hero">
                    <LinkButton href="#" type="full">I’m hungry</LinkButton>
                    <LinkButton href="#" type="ghost">Show me more</LinkButton>
                </div>
            </div>
        </StyledHeader>
    )
}

export default header;