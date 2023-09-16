import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Itempage = (props) => {
  let params = useParams();
  let itemId = params.id;
  let [item, setItem] = useState(null);

  useEffect(() => {
    getItem();
  }, []);

  let getItem = async () => {
    let response = await fetch(`/api/items/${itemId}`);
    let data = await response.json();
    setItem(data);
  };

  return (
    <div>
      <p>{item?.name}</p>
    </div>
  );
};

export default Itempage;
