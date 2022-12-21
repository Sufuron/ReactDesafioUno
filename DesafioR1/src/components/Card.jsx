import React from "react";

const Card = ({ title, imageSource, description, url }) => {
  return (
    <div className="card bg-dark text-white">
      <img src={imageSource} alt="" />
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
        <p className="card-text text-secondary text-white">{description}</p>
        <div className="text-center">
          <button className="btn btn-outline-secondary">
            <a className="text-decoration-none text-white" href={url} target="_blank">
              Mas Informacion
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
