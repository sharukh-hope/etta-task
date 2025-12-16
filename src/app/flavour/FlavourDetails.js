"use client";
import { Bangers, Mina, Outfit } from "next/font/google";
import NavigationBar from "@/app/components/NavigationBar";
import React, { useState } from "react";
import Image from "next/image";
import { flavours } from "../constants/flavours.js";
import { useParams } from "next/navigation.js";
import { AnimatePresence, motion } from "framer-motion";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
});
const minaFont = Mina({
  variable: "--font-mina",
  weight: "700",
});
const outfitFont = Outfit({
  variable: "--font-outfit",
  weight: "600",
});

const FlavourDetails = ({
  activeFlavourId,
  callTriggerReset,
  callbackOnPrevious,
  callbackOnNext,
}) => {
  /* state variables */
  const [activeQuantity, setActiveQuantity] = useState(500);
  const [navButtonsActive, setNavButtonsActive] = useState(false);

  /* other hooks */

  /* static variables */
  const quantities = [500, 125, 100];

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */
  const renderQuantity = () => {
    return (
      <div className={`quantityItemsWrapper ${outfitFont.variable}`}>
        {quantities.map((item) => {
          return (
            <div
              key={`${activeFlavourId}-${item}`}
              className={`quantityItem ${
                activeQuantity === item ? "active" : ""
              }`}
              onClick={() => setActiveQuantity(item)}
            >
              {item}
              <span>ml</span>
            </div>
          );
        })}
      </div>
    );
  };
  const renderCentralImageCarousel = () => {
    return (
      <div className="flavourImageWrapper">
        <Image
          src={flavours[activeFlavourId].imageSource}
          alt={flavours[activeFlavourId].headerText}
          className="flavourImage"
        />
        <div className={`${bangers.variable} backgroundText`}>Juicy</div>
        <div className="backgroundEffect" />

        <div className="arrowsWrapper">
          <div
            className="iconLeftArrow iconArrow"
            onClick={callbackOnPrevious}
          />
          <div className="iconRightArrow iconArrow" onClick={callbackOnNext} />
        </div>
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className="contentWrapper">
        <AnimatePresence mode="popLayout">
          <motion.h1
            className={`headerText ${minaFont.variable}`}
            key={`h1-${activeFlavourId}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              // ease: "linear",
            }}
          >
            {flavours[activeFlavourId].headerText}
          </motion.h1>
        </AnimatePresence>
        <p className="descriptionText">
          {flavours[activeFlavourId].detailedDescription}
        </p>
        <button className="primaryButton">View</button>
      </div>
    );
  };

  return (
    <div className={`FlavourDetailsWrapper ${activeFlavourId}`}>
      {/* <div className="backgroundGradient" /> */}
      <motion.div
        key={`details-${activeFlavourId}`}
        className="backgroundGradient"
        layoutId={`bg-${activeFlavourId}`}
        transition={{
          layout: { duration: 1, ease: "easeInOut", delay: 0.25 },
        }}
        onLayoutAnimationComplete={() => setNavButtonsActive(true)}
      />
      <motion.div
        initial={{ opacity: 0 }}
        className="allContentWrapper"
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.25,
          },
        }}
      >
        <NavigationBar
          callbackOnFlavoursClick={callTriggerReset}
          disableClick={!navButtonsActive}
        />
        {renderCentralImageCarousel()}
        {renderContent()}
        {renderQuantity()}
      </motion.div>
    </div>
  );
};

export default FlavourDetails;
