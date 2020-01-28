import styled from 'styled-components'
import backimg from '../../assets/images/hero.jpg'


const StyledHeader = styled.header`
    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${backimg});
    background-size: cover;
    background-position: center;
    height:100vh;
    width:100%;
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


    @media only screen and (max-width:767px) {
        font-size:15px;
        h1{
            font-size:1.5rem;
        }
    }


`

const StyledNav = styled.nav`


    .topbar-desktop,.topbar-phone{
        position:absolute;
        height:auto;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        left:0;
        top:0;
        img {
            
            height:5rem;
            width:auto;
        }

    }

    .topbar-desktop{

        img{
            margin-top:1rem;
            margin-left:2rem;
        }

        @media only screen and (max-width:767px) {
            display:none;
        }
    }

    .topbar-phone{

        display:none;
        img{
            margin-top:1rem;
            margin-right:2rem;
        }


        @media only screen and (max-width:767px) {
            display:flex;
            
        }
    }

`



export {StyledHeader,StyledNav}