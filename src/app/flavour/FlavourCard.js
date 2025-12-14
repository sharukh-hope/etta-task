"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
  const [isLeaving, setIsLeaving] = useState(false);

  /* other hooks */
  const router = useRouter();

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */
  const handleFlavourDetailsClick = () => {
    if (active) {
      setIsLeaving(true);
      setTimeout(() => {
        router.push(`/flavour/${id}`);
      }, [1000]);
    }
  };
  /* render functions */
  const flavourImage = () => {
    return (
      <div
        className={`flavourImageWrapper ${id} ${active ? "active" : ""}`}
        onClick={handleFlavourDetailsClick}
      >
        <div className={`actualImageWrapper`}>
          <Image src={imageSource} alt={headerText} className="flavourImage" />
          <div className={"backgroundCircle"} />
        </div>
        <div className={`pseudoHolder`} />
      </div>
    );
  };

  return (
    <div className={`FlavourCardWrapper ${isLeaving ? "leaving" : ""}`}>
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
