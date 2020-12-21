import React from 'react';
import Facebook from '../../Assets/facebook.svg'
import Instagram from '../../Assets/instagram.svg'
import Arrow from '../../Assets/down-arrow.svg'

export default function HeroButtons () {

    return (
        <div id="HeroBanner-bottom">
            <div id="HeroSocial">
                <img src={Facebook} alt="facebook"/>
                <img src={Instagram} alt="instagram"/>
            </div>
            <div id="HeroButtons">
            <img src={Arrow} alt="arrow"/>
            <div className="button-white">
                <p>Notre Magasin</p>
            </div>
            </div>

        </div>
    )
}