import React from 'react';
import Arrow from '../../Assets/down-arrow.svg'


export default function ButtomButton () {

    return (
        <div className="bottomButton">
            <img src={Arrow} alt="arrow"/>
            <div className="button-white">
                <p>Nos Marques</p>
            </div>
        </div>
    )
}