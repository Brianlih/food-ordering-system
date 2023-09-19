import "../App.css";
import coffeeImage from "../assets/coffee.jpeg";

const ListItem = ({ item }) => {
  return (
    <div className="item">
      <img
        src={item.image ? item.image : coffeeImage}
        className="item__img"
        alt=""
      />
      <div className="item__body">
        <h2 className="item__name">{item?.name}</h2>
        <p className="item__description">{item?.description}</p>
        <h3 className="item__price">{item?.price}</h3>
        {/* <button className="item__btn">Add to Cart</button> */}
      </div>
    </div>
  );
};

export default ListItem;
