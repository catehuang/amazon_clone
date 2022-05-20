import React from 'react';
import './Card.css';

function Card({ title, image, message}) {
        return (
                <div className="card">
                        <div className="card_title">{title}</div>
                        <div className="card_image"><img src=
                        {image} alt="" /></div>
                        <div className="card_link">{message}</div>
                </div>
        )
}

export default Card;
