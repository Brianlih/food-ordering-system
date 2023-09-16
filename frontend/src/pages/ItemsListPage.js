import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import "../App.css";

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
    <div className="items-wrapper">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemsListPage;
