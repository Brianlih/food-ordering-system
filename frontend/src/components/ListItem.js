import "../App.css";
import coffeeImage from "../assets/coffee.jpeg";

const ListItem = ({ item, onClick }) => {
  return (
    <div className="item-container" onClick={() => onClick(item)}>
      <img
        src={item.image ? item.image : coffeeImage}
        className="item__img"
        alt=""
      />
      <div className="item__body">
        <h2 className="item__name">{item.name}</h2>
        {/* <p className="item__description">{item.description}</p> */}
        <h3 className="item__price">{item.price}</h3>
      </div>
    </div>
  );
};

export default ListItem;
