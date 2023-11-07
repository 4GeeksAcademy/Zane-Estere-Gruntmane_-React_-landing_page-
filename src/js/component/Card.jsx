import React from "react";


const Card = ({ imageUrl, title, description, buttonText }) => {

  const cardStyles = {
    width: "18rem",
    display: "inline-flex",
    justifyContent: "space-around",
    marginLeft: "1rem",

  }
  return (
    <div className="card" style={cardStyles}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h className="card-title fs-4">{title}</h>
        <p className="card-text fw-light">
          {description}
        </p>
      </div>
      <div className="card-footer"> "How to put button here?"</div>
    </div>
  );

};

export default Card;
