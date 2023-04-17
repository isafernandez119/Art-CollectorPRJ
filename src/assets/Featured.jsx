import React from "react";
import Preview from "./preview";
import "./Featured.css";

// import App from "../App";

const Featured = ({ selectedResult }) => {
  const {
    title,
    date,
    description,
    images,
    culture,
    technique,
    medium,
    dimensions,
  } = selectedResult;

  return (
    <div className="Featured-container">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{description}</p>
      <img src={images[0].baseimageurl} alt={title} />
      <p>Culture: {culture}</p>
      <p>Technique: {technique}</p>
      <p>Medium: {medium}</p>
      <p>Dimensions: {dimensions}</p>
    </div>
  );
};

export default Featured;
