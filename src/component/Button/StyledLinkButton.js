import Styled from 'styled-components'

const color = {
    orange:"#e67e22",
    darkOrange:"#924d10"
}


const BaseLinkButton = Styled.a`
    

    &:link,&:visited{
        display:inline-block;
        padding:10px 30px;
        font-weight:300;
        text-decoration:none;
        border-radius:200px;
        transition: all .2s;
    }

    
    
`

const FullLinkButton = Styled(BaseLinkButton)`


    &:link,&:visited{
        margin-right:15px;
        background-color:${color.orange};
        border:1px solid ${color.orange};
        color:#fff;
        
    }
    
    &:hover,&:active{
        background-color:${color.darkOrange};
    }
    
`

const GhostLinkButton = Styled(BaseLinkButton)`

    &:link,&:visited{
        border:1px solid ${color.orange};
        color:${color.orange};
    }

    &:hover,&:active{
        background-color:${color.darkOrange};
        color:white;
    }
`




export {
    BaseLinkButton,
    FullLinkButton,
    GhostLinkButton
}