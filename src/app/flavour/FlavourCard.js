import React from "react";

const FlavourCard = ({
  headerText,
  description,
  textClassName,
  callbackOnClick,
  id,
}) => {
  /* state variables */

  /* other hooks */

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */

  return (
    <div className="FlavourCardWrapper">
      <div className={`number ${textClassName}`}>{id}</div>
      <h2 className="headerWrapper">{headerText}</h2>
      <p className="description">{description}</p>
      <button className="primaryButton" onClick={callbackOnClick}>
        View
      </button>
    </div>
  );
};

export default FlavourCard;
