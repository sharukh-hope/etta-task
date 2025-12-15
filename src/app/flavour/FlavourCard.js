"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FlavourCard = ({
  headerText,
  description,
  id,
  callbackOnClick,
  active,
  sNo,
  imageSource,
  callbackToShowFlavourDetails,
  callbackToHideFlavourMenu,
}) => {
  /* state variables */
  const [isLeaving, setIsLeaving] = useState(false);

  /* other hooks */

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */
  const handleFlavourDetailsClick = () => {
    if (active) {
      setIsLeaving(true);
      // callbackToHideFlavourMenu();
      callbackToHideFlavourMenu();

      setTimeout(() => {
        callbackToShowFlavourDetails();
      }, [500]);
      setTimeout(() => {
        // callbackToShowFlavourDetails();
      }, [1000]);
    }
  };
  /* render functions */
  const flavourImage = () => {
    return (
      <div className={`flavourImageWrapper ${id} ${active ? "active" : ""}`}>
        <div className={`actualImageWrapper`}>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src={imageSource}
              alt={headerText}
              className="flavourImage"
            />
          </motion.div>
          <motion.div
            className={"backgroundCircle"}
            // animate={isLeaving ? { scale: [1, 0.8, 8] } : { x: 0 }}
            exit={{ scale: [1, 0.8, 8] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </div>
        <div className={`pseudoHolder`} />
      </div>
    );
  };

  return (
    <motion.div
      className={`FlavourCardWrapper ${isLeaving ? "leaving" : ""}`}
      initial={false}
      // animate={isLeaving ? { x: [0, 40, -400] } : { x: 0 }}
      exit={isLeaving ? { x: [0, 40, -400] } : { x: 0 }}
      // exit={{ x: [0, 40, -window.innerWidth / 3] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
      onClick={handleFlavourDetailsClick}
    >
      <motion.div
        className="flavourBackground"
        layoutId={`bg-${id}`}
        initial={false}
        // animate={isLeaving ? { scaleX: [1, 5] } : { x: 0 }}
        exit={{ scaleX: [1, 5] }}
        transition={{
          duration: 1,
          delay: 0.5,
          // ease: "easeInOut",
          // times: [0, 0.5, 1],
          layout: {
            duration: 1,
            visualDuration: 1,
            ease: "easeInOut",
          },
        }}
      />
      {flavourImage()}
      <motion.div
        className={`contentWrapper ${active ? "active" : ""}`}
        onClick={callbackOnClick}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className={`number ${id}Text`}>{sNo}</div>
        <h2 className="headerWrapper">{headerText}</h2>
        <p className="description">{description}</p>
        <button className="primaryButton">View</button>
      </motion.div>
    </motion.div>
  );
};

export default FlavourCard;
