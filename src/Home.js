import React from 'react'
import { Background } from './components/FrontPage/Background'
// import { Carrousel } from './components/FrontPage/Carrousel'
import { Products } from './components/FrontPage/Products'
import './general.css'

export const Home = () => {
    return (
        <div>
            <Background/>
            {/* <Carrousel/> */}
            <Products/>
        </div>
    )
}
