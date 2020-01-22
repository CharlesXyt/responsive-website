import React from 'react'
import {
    BaseLinkButton,
    FullLinkButton,
    GhostLinkButton
} from './StyledLinkButton'


export default (props) => {
    
    let buttonElement=null; 

    switch(props.type){
        case "full":
            buttonElement = <FullLinkButton {...props}>{props.children}</FullLinkButton>
            break
        case "ghost":
            buttonElement = <GhostLinkButton {...props}>{props.children}</GhostLinkButton>
            break
        default:
            buttonElement = <BaseLinkButton {...props}>{props.children}</BaseLinkButton>
            break
    }

    return buttonElement;
}
    