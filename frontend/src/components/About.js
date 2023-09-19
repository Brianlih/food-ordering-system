import { useState, useEffect } from "react";

const About = () => {
  let [about, setAbout] = useState(null);
  useEffect(() => {
    get_description();
  }, []);

  const get_description = async () => {
    let response = await fetch("/api/3/description/");
    let data = await response.json();
    setAbout(data);
  };

  return <div className="about">{about}</div>;
};

export default About;
