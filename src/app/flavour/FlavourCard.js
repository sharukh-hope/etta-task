import Image from "next/image";
import React from "react";

const FlavourCard = ({
  headerText,
  description,
  id,
  callbackOnClick,
  active,
  sNo,
  imageSource,
}) => {
  /* state variables */

  /* other hooks */

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */
  const flavourImage = () => {
    return (
      <div className={`flavourImageWrapper ${id} ${active ? "active" : ""}`}>
        <div className={`actualImageWrapper`}>
          <Image src={imageSource} alt={headerText} className="flavourImage" />
          <div className={"backgroundCircle"} />
        </div>
        <div className={`pseudoHolder`} />
      </div>
    );
  };

  return (
    <div className="FlavourCardWrapper">
      <div className="flavourBackground" />
      {flavourImage()}
      <div
        className={`contentWrapper ${active ? "active" : ""}`}
        onClick={callbackOnClick}
      >
        <div className={`number ${id}Text`}>{sNo}</div>
        <h2 className="headerWrapper">{headerText}</h2>
        <p className="description">{description}</p>
        <button className="primaryButton">View</button>
      </div>
    </div>
  );
};

export default FlavourCard;
