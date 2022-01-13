import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__itemgov">
        <Link className="cards__item__linkgov" to={props.path}>
          <figure className="cards__item__pic-wrapgov" data-category={props.label}>
            <img
              className="cards__item__imggov"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
