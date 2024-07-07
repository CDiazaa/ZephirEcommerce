import React from "react";

import Card from "react-bootstrap/Card";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
  return (
    <div className="itemListContainerContainer">
      <div className="itemListContainer">
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ width: "18rem", margin: 10 }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title className="productText" >{product.title}</Card.Title>
                <Link className="verMasB textsButton" to={`/item/${product.id}`}>Ver más <GoArrowRight /> </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainerComponent;
