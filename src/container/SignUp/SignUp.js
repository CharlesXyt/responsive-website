import React from 'react';
import Header from '../../component/Header/Header'
import {StyledSection,StyledFlexDiv} from '../HomePage/StyledHomePage'
import Button from '../../component/Button/LinkButton'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck,faEraser} from '@fortawesome/free-solid-svg-icons'

const StyledPriceDiv = styled(StyledFlexDiv)`
    position:relative;
    .price-box {
        width:27%;
        height:400px;
        border-radius:5px;
        border-bottom: 1ps solid #e8e8e8;
        background-color:white;
        padding:1rem;
        h3 {
            margin:0;
            font-weight:300;
            font-size:2rem;

        }

        p{
            margin:0;
        }

        .price-box-upper {
            height:33%;

            .price {
                font-size:2.5rem;
                font-weight:100;
                color:#e67e22;
            }
        }

        .button-signup {
            margin:0.7rem auto;
            transform:translateX(50%);
            padding:7px 14px;
            font-size:1.2rem;
        }

        ul {
            height:35%;
            list-style:none;
            padding-left:5px;
            li{
                .icon-price-box{
                    color:#e67e22;
                    font-size:0.5rem;
                    padding-right:10px;
                }
            }
        }
    }

`

const signUp = () => {
    
    return (
        <React.Fragment>
            <Header/>
            <StyledSection>
                <h2>Start eating healthy today</h2>
                <StyledPriceDiv>
                    <div className="price-box">
                        
                        <div className="price-box-upper">
                            <h3>Premium</h3>
                            <p className="price">399$ per month</p>
                            <p>That’s only 13.30$ per meal</p>
                            
                        </div>
                        <hr/>
                        
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> 1 meal every day</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Order 24/7</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Access to newest creations</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Free delivery</li>
                        </ul>
                        <hr/>
                        <Button href="#" type="ghost" className="button-signup">Sign up now</Button>
                    </div>
                    <div className="price-box">
                        <div className="price-box-upper">
                            <h3>Pro</h3>
                            <p className="price">149$ per month</p>
                            <p>That’s only 14.90$ per meal</p>
                        </div>
                        <hr/>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> 1 meal every day</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Order 24/7</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Access to newest creations</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Free delivery</li>
                        </ul>
                        <hr/>
                        <Button href="#" type="ghost" className="button-signup">Sign up now</Button>
                    </div>
                    <div className="price-box">
                        <div className="price-box-upper">
                            <h3>Starter</h3>
                            <p className="price">19$ per meal</p>
                        </div>
                        <hr/>
                        
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> 1 meal</li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Order from 8 am to 12 pm</li>
                            <li><FontAwesomeIcon icon={faEraser} className="icon-price-box"/></li>
                            <li><FontAwesomeIcon icon={faCheck} className="icon-price-box"/> Free delivery</li>
                        </ul>
                        <hr/>
                        <Button href="#" type="ghost" className="button-signup">Sign up now</Button>
                    </div>
                </StyledPriceDiv>
            </StyledSection>
        </React.Fragment>
    )
}

export default signUp;