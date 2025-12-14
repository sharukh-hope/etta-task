"use client";
import { Bangers, Mina } from "next/font/google";
import NavigationBar from "@/app/components/NavigationBar";
import React from "react";
import Image from "next/image";
import { flavours } from "../constants/flavours.js";
import { useParams } from "next/navigation.js";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
});
const minaFont = Mina({
  variable: "--font-mina",
  weight: "700",
});

const FlavourDetails = ({ activeFlavourId, callTriggerReset }) => {
  /* state variables */

  /* other hooks */

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */
  const handlePrevious = () => {};
  const handleNext = () => {};

  /* render functions */

  return (
    <div className={`FlavourDetailsWrapper ${activeFlavourId}`}>
      <div className="backgroundGradient" />
      <NavigationBar callbackOnFlavoursClick={callTriggerReset} />
      <div className="flavourImageWrapper">
        <Image
          src={flavours[activeFlavourId].imageSource}
          alt={flavours[activeFlavourId].headerText}
          className="flavourImage"
        />
        <div className={`${bangers.variable} backgroundText`}>Juicy</div>
        <div className="backgroundEffect" />

        <div className="arrowsWrapper">
          <div className="iconLeftArrow iconArrow" onClick={handlePrevious} />
          <div className="iconRightArrow iconArrow" onClick={handleNext} />
        </div>
      </div>
      <div className="contentWrapper">
        <h1 className={`headerText ${minaFont.variable}`}>
          {flavours[activeFlavourId].headerText}
        </h1>
        <p className="descriptionText">
          {flavours[activeFlavourId].detailedDescription}
        </p>
        <button className="primaryButton">View</button>
      </div>
    </div>
  );
};

export default FlavourDetails;
