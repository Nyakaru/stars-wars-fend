import React from "react";
import { useParams } from "react-router-dom";

import AboutComponent from "../../components/People/About";
import { Params } from "../../components/People/interface";

const AboutPage = () => {
  const params: Params = useParams();
  const { name } = params;
  return (
    <div className="about-page">
      <AboutComponent value={name} />
    </div>
  );
};

export default AboutPage;
