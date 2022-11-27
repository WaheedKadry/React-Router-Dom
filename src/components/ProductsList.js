import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./ProductsList.css";
export default function ProductsList(props) {
  const api_Url = "https://fakestoreapi.com/products";
  let [data, setData] = useState([]);
  let [categories, setCategories] = useState([]);
  let getProducts = () => {
    fetch(api_Url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  let getCategories = () => {
    fetch(`${api_Url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  let getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_Url}/category/${catName}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button onClick={() => {getProducts()}} className="btn btn-info m-1" >All</button>
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                getProductInCategory(cat);
              }}
              key={cat}
              className="btn btn-info m-1"
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {data.map((e) => {
            return (
              <div className="col-3" key={e.id}>
                <Product prod={e} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
