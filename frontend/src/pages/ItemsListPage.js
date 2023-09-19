import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Category from "../components/Category";
import Categories from "../components/Categories";
import "../App.css";

const ItemsListPage = () => {
  const { restaurantId } = useParams();
  const [loadingMenu, setLoadingMenu] = useState(true);

  let getCategories = async () => {
    let response = await fetch(`/api/${restaurantId}/categories/`);
    let data = await response.json();
    setCategories(data);
    setLoadingMenu(false);
  };

  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Header restaurantId={restaurantId} />
      {loadingMenu ? (
        <div>Loading menu...</div>
      ) : (
        <Categories categories={categories} />
      )}
      <div>
        {categories.map((cat, index) => (
          <Category key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default ItemsListPage;
