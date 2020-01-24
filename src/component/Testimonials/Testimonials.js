import React from 'react'
import styled from 'styled-components'
import backCustomerImg from '../../assets/images/back-customers.jpg' 
import customer_1 from '../../assets/images/customer-1.jpg'
import customer_2 from '../../assets/images/customer-2.jpg'
import customer_3 from '../../assets/images/customer-3.jpg'


const StyledTestimonials = styled.div`
    background:linear-gradient(rgba(34, 47, 62,0.6),rgba(34, 47, 62,0.6)), url(${backCustomerImg});
    background-attachment:fixed;
    color:white;
    padding-top:30px;
    padding-bottom:30px;
    .customer-testimonials{
        display:flex;
        justify-content:space-around;
        width:80%;
        margin:auto;

        .img-customer-name {

            display:flex;
            align-items:center;

            img {
                width:4rem;
                height:4rem;
                border-radius:50%;
                margin-right:1rem;
            }

        }

        

        p{
            font-style:italic;
            width:80%;
            font-size:1.2rem;
        }
        
    }


`

export default () => {

    return (
        <StyledTestimonials>
            <h2>Our customers can't live without us</h2>
            <div className="customer-testimonials">
                <div>
                    <p>Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!</p>
                    <div className="img-customer-name">
                        <img src={customer_1} alt="customer_1" ></img>
                        <p>Alberto Duncan</p>
                    </div>
                </div>
                <div>
                    <p>Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!</p>
                    <div className="img-customer-name">
                        <img src={customer_2} alt="customer_2" ></img>
                        <p>Joana Silva</p>
                    </div>
                </div>
                <div>
                    <p>Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!</p>
                    <div className="img-customer-name">
                        <img src={customer_3} alt="customer_3" ></img>
                        <p>Milton Chapman</p>
                    </div>
                </div>
            </div>
            
        </StyledTestimonials>
    )

}