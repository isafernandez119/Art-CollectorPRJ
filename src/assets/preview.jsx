import React from "react";
import "./preview.css";

const Preview = ({ searchResults, setSelectedResult }) => {
  const handleSelectResult = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className="preview-container">
      {searchResults.map((result) => (
        <div key={result.id} className="preview-item">
          {result.images && result.images.length > 0 && (
            <img
              src={result.images[0].baseimageurl}
              alt={result.title}
              onClick={() => handleSelectResult(result)}
            />
          )}
          <p onClick={() => handleSelectResult(result)}>{result.title} </p>
        </div>
      ))}
    </div>
  );
};

export default Preview;
