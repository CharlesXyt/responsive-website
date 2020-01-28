import React from 'react'
import {
    StyledHeader,
    StyledNav
} from './StyledHeader'
import LinkButton from '../Link/Link'
import logo from '../../assets/images/logo-white.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleButton from './ToggleButton'


const Header = (props) => {

    return (
        <StyledHeader>
            <StyledNav>
                <div className="topbar-desktop">
                    <img src={logo} alt="omnifood logo"/>
                    <NavigationItems/>
                </div>
                <div className="topbar-phone">
                    <ToggleButton clicked={props.toggleClick}>click</ToggleButton>
                    <img src={logo} alt="omnifood logo"/>
                </div>
                
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

export default Header;