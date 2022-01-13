import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__itemgov">

      <a className="cards__item__linkgov"   target="_blank" href={props.path}>
          <figure className="cards__item__pic-wrapgov" data-category={props.label}>
            <img
              className="cards__item__imggov"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
         </a>
      </li>
    </>
  );
}

export default CardItem;
