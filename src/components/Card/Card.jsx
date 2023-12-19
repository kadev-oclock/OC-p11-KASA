import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="article">
      <Link to={"/detail/" + data.id}>
        <div className="card">
          <img src={data.cover} alt="" className="card__img" />
          <div className="card__overlay"></div>
          <h3 className="card__title">{data.title}</h3>
        </div>
      </Link>
    </div>
  );
}
export default Card;
