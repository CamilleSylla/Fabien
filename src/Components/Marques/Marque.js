import React from 'react';
import ButtomButton from './BottomButton';
import Brands from './Brands';
import './Marque.scss';
import MarTxt from './MarTxt';

export default function Marque () {

    return (
        <div id="marqueContainer">
            <Brands/>
            <MarTxt/>
            <ButtomButton/>
        </div>
    )
}