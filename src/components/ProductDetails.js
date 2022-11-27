import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
export default function ProductDetails(props) {
  let api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  let [product, setProduct] = useState([])
  console.log(params);
  useEffect(() => {
      fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
      console.log(product);
  }, []);

  return (
      <div className="container ">

    <div className="col-6 m-auto" key={product.id} >
    <Product prod={product} showButton={false}/>
    </div>

    </div>

  );
}
