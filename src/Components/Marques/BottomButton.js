import React from 'react';
import Arrow from '../../Assets/down-arrow.svg'


export default function ButtomButton () {

    return (
        <div className="bottomButton2">
            <img src={Arrow} alt="arrow"/>
            <div className="button-white">
                <p>L'Équipe</p>
            </div>
        </div>
    )
}