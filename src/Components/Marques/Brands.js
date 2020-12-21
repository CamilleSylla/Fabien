import React from 'react';
import Boss from '../../Assets/boss-hugo-boss.svg'
import Diesel from '../../Assets/diesel-5.svg'
import Eden from '../../Assets/eden-park.svg'
import Polo from '../../Assets/polo-ralph-lauren.svg'

export default function Brands () {

    return (
        <div id="Brands">
            <h1>FABIEN</h1>
            <div id="brandDisplay">
                <div>
                    
                <img src={Boss} alt="Hugo Boss"/>
                </div>
                <div>
                <img src={Eden} alt="Hugo Boss"/>

                </div>
                <div>

                <img src={Diesel} alt="Hugo Boss"/>
                </div>
                <div>

                <img src={Polo} alt="Hugo Boss"/>
                </div>
            </div>
        </div>
    )
}