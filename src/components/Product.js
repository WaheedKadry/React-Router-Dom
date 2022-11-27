import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgCard from "../images/1.jpg";

import "./ProductsList.css";
export default function Product(props) {
  let { prod, showButton } = props;
  // console.log(prod);
  // console.log(prod.id);
  // console.log(showButton);
  return (
    <>
      <div className="card">
        <img src={prod.image} className="card-img-top" alt={prod.title} />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.description} </p>
          <p className="card-text">Price: {prod.price} </p>
          {showButton && (
            <Link to={`/product/${prod.id}`} className="btn btn-primary">
              Detials
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
