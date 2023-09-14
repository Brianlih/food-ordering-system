import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`}>
      <div>
        <h3>{item.name}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
