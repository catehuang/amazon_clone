import React from 'react';

function Card({ title, image, message, card_option_line1, card_option_line2 }) {
        return (
                <div class="w-full z-0">
                        <div class="mx-auto p-3 flex flex-col  border rounded-xl bg-white h-full">
                                <div class="my-3 font-bold">{title}</div>
                                <div class="object-fit">
                                        <img src={image} alt="" />
                                </div>
                                <div class="my-5 min-h-48">                                        
                                        <p class="bg-red-700 text-white px-1">{card_option_line1}</p>
                                        <p>{card_option_line2}</p>
                                        <p class="text-cyan-600">{message}</p>
                                </div>        
                        </div>
                </div>
        )
}

export default Card;
