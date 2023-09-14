import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const ItemsListPage = () => {
  let [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  let getItems = async () => {
    let response = await fetch("/api/items/");
    let data = await response.json();
    setItems(data);
  };

  return (
    <div>
      <div>
        {/* <h2 className="meals-title">&#9782; Notes</h2> */}
        {/* <p className="meals-count">{meals.length}</p> */}
      </div>
      <div>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsListPage;
