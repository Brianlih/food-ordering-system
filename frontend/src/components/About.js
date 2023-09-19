import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  const { restaurantId } = useParams();
  let [about, setAbout] = useState(null);
  useEffect(() => {
    get_about();
  }, []);

  const get_about = async () => {
    let response = await fetch(`/api/${restaurantId}/about/`);
    let data = await response.json();
    setAbout(data);
  };

  return (
    <div className="about">
      {about}
      <Link to={`/${restaurantId}`} className="return-button">
        Return
      </Link>
    </div>
  );
};

export default About;
