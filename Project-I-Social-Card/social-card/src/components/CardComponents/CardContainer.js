import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";

function CardContainer(props) {
    return (
        <div onClick={props.onClick} className='CardContainer'>
        <CardBanner />
        <CardContent />
        </div>
    )
}

export default CardContainer;