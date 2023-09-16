import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ListItem = ({ item }) => {
  return (
    <div className="item">
      <img src={item?.img} className="item__img" />
      <div className="item__body">
        <h2 className="item__name">{item?.name}</h2>
        <p className="item__description">{item?.description}</p>
        <h3 className="item__price">{item?.price}</h3>
        <button className="item__btn">Add to Cart</button>
      </div>
    </div>
    // <Link to={`/items/${item.id}`}>
    //   <div>
    //     <h3>{item.name}</h3>
    //   </div>
    // </Link>
  );
};

export default ListItem;
