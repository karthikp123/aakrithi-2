import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const ExploreCardDetails = () => {
  
  const location = useLocation();
  const { title, id, image, status, description, email } = location.state;
  return (
    <div>
      <Header></Header>
      <div className="explore_pages">
        <div className="explore_info">
          <h3 className="text-center mb-4 mt-5">{title}</h3>
          <img src={image} alt="" className="rounded mx-auto d-block mb-3 mt-4" />
          <h5 className="mb-3 mt-4">{description}</h5>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ExploreCardDetails;
