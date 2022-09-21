import React from "react";

const Technology = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h2>Technology: {props.technologyName} </h2>
        <h3>Used For: {props.usedFor} </h3>
      </div>
    </>
  );
};

export default Technology;
