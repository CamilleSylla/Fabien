import React from 'react';
import './Magasin.scss';
import MagBanner from './MagBanner';
import MagInfos from './MagInfos';
import MagTxt from './MagTxt';

export default function Magasin () {

    return (
        <div id="Magasin-container">
            <MagBanner/>
            <MagInfos/>
            <MagTxt/>
        </div>
    )
}