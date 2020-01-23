import React from 'react'
import city_1 from '../../assets/images/lisbon-3.jpg'
import city_2 from '../../assets/images/san-francisco.jpg'
import city_3 from '../../assets/images/berlin.jpg'
import city_4 from '../../assets/images/london.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPersonBooth,faStar} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {StyledCityDiv} from './StyledCities'

export default () => {

    const imageSrc = [
        {
            name:"Lisbon",
            src:city_1,
            person:"1600+ happy eaters",
            star:"60+ top chefs",
            twitter:"@omnifood_lx"
        },
        {
            name:"San Francisco",
            src:city_2,
            person:"3700+ happy eaters",
            star:"160+ top chefs",
            twitter:"@omnifood_sf"
        },
        {
            name:"Berlin",
            src:city_3,
            person:"2300+ happy eaters",
            star:"110+ top chefs",
            twitter:"@omnifood_berlin"
        },
        {
            name:"London",
            src:city_4,
            person:"1200+ happy eaters",
            star:"50+ top chefs",
            twitter:"@omnifood_london"
        }
    ]
    return (
        <React.Fragment>
            {imageSrc.map((el) => {
                return (
                    <StyledCityDiv key={el.name}>
                        <img src={el.src} alt={el.name}/>
                        <h3>{el.name}</h3>
                        <div className="icon-element">
                            <FontAwesomeIcon className="icon-cities" icon={faPersonBooth}/>
                            <a href="/">{el.person}</a>
                        </div>
                        <div className="icon-element">
                            <FontAwesomeIcon className="icon-cities" icon={faStar}/>
                            <a href="/">{el.star}</a>
                        </div>
                        <div className="icon-element">
                            <FontAwesomeIcon className="icon-cities" icon={faTwitter}/>
                            <a href="/">{el.twitter}</a> 
                        </div>
                    </StyledCityDiv>
                )
            })}
        </React.Fragment>
    )
}

   
