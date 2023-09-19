import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import "../App.css";

const Category = ({ cat }) => {
  let [items, setItems] = useState([]);

  let getItems = async () => {
    let response = await fetch(`/api/${cat.id}/items/`);
    let data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div id={`category-${cat.id}`}>
      <p className="category-title">{cat.name}</p>
      <div className="items-wrapper">
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
