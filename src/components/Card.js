import React from "react";

function Card({ title, image, message, card_option_line1, card_option_line2 }) {
  return (
    <div className="w-full z-0">
      <div className="mx-auto p-3 flex flex-col  border rounded-xl bg-white h-full">
        <div className="my-3 font-bold">{title}</div>
        <div className="object-fit">
          <img src={image} alt="" />
        </div>
        <div className="my-5 min-h-48">
          <p className="bg-red-700 text-white px-1">{card_option_line1}</p>
          <p>{card_option_line2}</p>
          <p className="text-cyan-600">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
