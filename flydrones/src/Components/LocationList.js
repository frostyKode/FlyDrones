import React from "react";

const LocationList = props => {
  return (
    <div>
      {props.locations.map(x => (
        <div
          key={x.locationId}
          className="card"
          style={{ width: "10rem", float: "left", margin: "2px" }}
          onClick={props.updateMap.bind(this, x)}
        >
          <img className="card-img-top" src={x.image} alt="" />
          <div className="card-body">
            <p className="card-text">{x.locationText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
