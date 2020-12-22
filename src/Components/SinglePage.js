import React from 'react'
import Layout from './HeroBanner/Layout'
import Magasin from './Magasin/Magasin'
import Marque from './Marques/Marque'

export default function SinglePage () {
    return (
        <div className="singlePage">
            <Layout/>
            <Magasin/>
            <Marque/>
        </div>
    )
}