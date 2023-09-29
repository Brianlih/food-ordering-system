import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Category from "../components/Category";
import Categories from "../components/Categories";
import "../App.css";

const ItemsListPage = () => {
  const { restaurantId } = useParams();

  let getCategories = async () => {
    let response = await fetch(`/api/${restaurantId}/categories/`);
    let data = await response.json();
    setCategories(data);
  };

  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Header restaurantId={restaurantId} />
      <Categories categories={categories} />
      <div>
        {categories.map((cat, index) => (
          <Category key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default ItemsListPage;
