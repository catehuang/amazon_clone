import React from 'react';
import './Card.css';

function Card({ title, image, message, card_option_line1, card_option_line2 }) {
        return (
                <div className="card">
                        <div className="card_main_frame_1">
                                <div className="card_title">{title}</div>
                                <div className="card_image">
                                        <img src=
                                                {image} alt="" />
                                        <p className="card_option_line1">{card_option_line1}</p>
                                        <p className="card_option_line2">{card_option_line2}</p>
                                </div>
                        </div>
                        <div className="card_link">{message}</div>
                </div>
        )
}

export default Card;
