import React from 'react'
import {StyledHeader} from './StyledHeader'
import LinkButton from '../Button/LinkButton'

const header = () => {
    return (
        <StyledHeader>
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