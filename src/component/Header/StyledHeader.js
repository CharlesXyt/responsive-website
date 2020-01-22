import styled from 'styled-components'
import backimg from '../../assets/images/hero.jpg'


const StyledHeader = styled.header`
    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${backimg});
    background-size: cover;
    background-position: center;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .text-hero-all {
       
        .text-hero {
            display:flex;

            
        }
    }

    h1 {
        margin-top:0;
        margin-bottom:1rem;
        color:#fff;
        font-size:2.4rem;
        font-weight:300;
        text-transform:uppercase;
        letter-spacing:1px;
        word-spacing:4px;
    }
`

const StyledNav = styled.nav`

    position:absolute;
    height:auto;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    left:0;
    top:0;
    img {
        margin-top:20px;
        margin-left:40px;
        height:100px;
        width:auto;
    }
`



export {StyledHeader,StyledNav}