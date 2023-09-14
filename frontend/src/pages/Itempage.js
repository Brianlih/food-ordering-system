import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Mealpage = (props) => {
  let params = useParams();
  let mealId = params.id;
  let [meal, setMeal] = useState(null);

  useEffect(() => {
    getMeal();
  }, []);

  let getMeal = async () => {
    let response = await fetch(`/api/items/${mealId}`);
    let data = await response.json();
    setMeal(data);
  };

  return (
    <div className="meal">
      <p>{meal?.name}</p>
    </div>
  );
};

export default Mealpage;
