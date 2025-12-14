"use client";
import { Bangers, Mina } from "next/font/google";
import NavigationBar from "@/app/components/NavigationBar";
import React from "react";
import Image from "next/image";
import { flavours } from "../../constants/flavours.js";
import { useParams } from "next/navigation.js";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
});
const minaFont = Mina({
  variable: "--font-mina",
  weight: "700",
});

const FlavourDetails = ({}) => {
  /* state variables */
  const { slug } = useParams();

  /* other hooks */

  /* static variables */
  console.log(slug);

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */
  const handlePrevious = () => {};

  /* render functions */

  return (
    <div className={`FlavourDetailsWrapper ${slug}`}>
      <NavigationBar />
      <div className="flavourImageWrapper">
        <Image
          src={flavours[slug].imageSource}
          alt={flavours[slug].headerText}
          className="flavourImage"
        />
        <div className={`${bangers.variable} backgroundText`}>Juicy</div>
        <div className="backgroundEffect" />

        <div className="arrowsWrapper">
          <div className="iconLeftArrow iconArrow" onClick={handlePrevious} />
          <div className="iconRightArrow iconArrow" onClick={handlePrevious} />
        </div>
      </div>
      <div className="contentWrapper">
        <h1 className={`headerText ${minaFont.variable}`}>
          {flavours[slug].headerText}
        </h1>
        <p className="descriptionText">{flavours[slug].detailedDescription}</p>
        <button className="primaryButton">View</button>
      </div>
    </div>
  );
};

export default FlavourDetails;
