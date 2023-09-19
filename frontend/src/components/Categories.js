import { useEffect, useState } from "react";

const Categories = ({ categories }) => {
  let flag = false;
  const [currentCategory, setCurrentCategory] = useState(null);

  const determineCurrentCategory = () => {
    const scrollY = window.scrollY;
    let categoryLocations = [];

    for (let i = 0; i < categories.length; ++i) {
      categoryLocations.push(
        document.getElementById(`category-${categories[i].id}`)
      );
    }

    for (let i = 0; i < categoryLocations.length - 1; ++i) {
      if (
        // "150" is corresponding to the sum of the header
        // and the menu height
        scrollY >= categoryLocations[i].offsetTop - 150 &&
        scrollY < categoryLocations[i + 1].offsetTop - 150
      ) {
        setCurrentCategory(categories[i]);
        flag = true;
        return;
      }
    }
    if (!flag) setCurrentCategory(categories[categories.length - 1]);
  };

  useEffect(() => {
    window.addEventListener("scroll", determineCurrentCategory);
    return () => {
      window.removeEventListener("scroll", determineCurrentCategory);
    };
  }, [determineCurrentCategory]);

  const handleMenuItemClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu">
      <ul className="categories-wrapper">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={
              currentCategory === cat
                ? "categories-item customActive"
                : "categories-item"
            }
          >
            <a onClick={() => handleMenuItemClick(`category-${cat.id}`)}>
              {cat.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
