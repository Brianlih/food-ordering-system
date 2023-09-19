import { useState, useEffect } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import "../App.css";

const ItemsListPage = () => {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  let getCategories = async () => {
    let response = await fetch("/api/categories/");
    let data = await response.json();
    setCategories(data);
  };

  return (
    <div>
      <Header />
      <div className="categories-wrapper">
        {categories.map((cat, index) => (
          <Category key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default ItemsListPage;
