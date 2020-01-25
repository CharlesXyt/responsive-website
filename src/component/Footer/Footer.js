import React from 'react'
import styled from 'styled-components'
import {faFacebook,faTwitter,faGooglePlus,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const StyledFooterDiv = styled.div`
    background-color:#333;
    width:100%;
    height:130px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;


    .footer-upper{
        display:flex;
        width:80%;
        margin:auto;
        justify-content:space-between;
    }
    .copyright{
        font-size:0.8rem;
        text-align:center;
        color:#888;
    }
    .footer-nav,.footer-social-link{
        display:flex;
        list-style:none;
        flex-direction:row;
        li {
            margin-right:20px;
            &:last-child{
                margin-right:0;
            }
        }
        .footer-social-icon{
            color:#888;
            font-size:1rem;
            &:hover{
                color:#e67e22;
            }
        }
        a {
            color:#888;
            text-decoration:none;
            &:hover{
                color:#e67e22;
            }
        }

    }

`




export default () => (
    <StyledFooterDiv>
        <div className="footer-upper">
            <div className="footer-nav">
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Press</a></li>
                <li><a href="/">IOS APP</a></li>
                <li><a href="/">Android APP</a></li>
            </div>
            <div className="footer-social-link">
                <li><a href="/"><FontAwesomeIcon className="footer-social-icon" icon={faFacebook}/></a></li>
                <li><a href="/"><FontAwesomeIcon className="footer-social-icon" icon={faTwitter}/></a></li>
                <li><a href="/"><FontAwesomeIcon className="footer-social-icon" icon={faGooglePlus}/></a></li>
                <li><a href="/"><FontAwesomeIcon className="footer-social-icon" icon={faInstagram}/></a></li>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright &copy; 2020 by Yitong</p>
        </div>
    </StyledFooterDiv>
    
    
)