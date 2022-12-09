import React from 'react';
import './pricetag.css';
//import bank from '../../assets/money.png';
//import midbank from '../..assets/celebration.png';
//import lowbank from '../..assets/smile.jpg';
//import feast from '../..assets/MealMe_FEAST.png';


const Pricetag=() => {
    return(
        <div className="pricetag__page-content section__padding" id="home">
            <div className= "pricetag__page-content"> 
                <h1 className= "intro__text">How much are we spending today?</h1>
            </div>
        
        <div className="pricetag__bank">
            <button type="button" class="center">$$$$</button>
        </div>

        <div className="pricetag__midbank">
            <button type="button" class="center">$$$</button> 
            </div>

        <div className="pricetag__lowbank">
            <button type="button" class="center">$$ </button>
        </div>

        <div className="pricetag__lowestbank">
            <button type="button" class="center">$ </button>
        </div>
        
         </div>
    )
   

}

export default Pricetag;