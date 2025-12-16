"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
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
  onExitComplete,
}) => {
  /* state variables */
  const [isUnmounting, setIsUnmounting] = useState(false);

  /* variables */
  const cardExitVariants = {
    exit: () => {
      if (!cardRef.current) return {};
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const viewportCenterX = window.innerWidth / 2;

      const exitToRight = cardCenterX < viewportCenterX;

      return {
        x: exitToRight ? [0, -80, -400] : [0, 80, 400],
        width: "100vw",
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      };
    },
  };

  /* useRefs */
  const cardRef = useRef();

  /* helper functions */
  const handleFlavourDetailsClick = () => {
    setIsUnmounting(true);
    if (active) {
      callbackToShowFlavourDetails();
    }
  };
  /* render functions */
  const flavourImage = () => {
    if (!active) return null;
    const imageVariants = {
      exit: () => {
        if (!cardRef.current) return {};

        const rect = cardRef.current.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const viewportCenterX = window.innerWidth / 2;

        const exitToRight = cardCenterX < viewportCenterX;

        return {
          x: exitToRight ? 400 : -400,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          },
        };
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    const renderCircle = () => {
      const circleVariants = {
        animate: {
          scale: 1,
          transition: {
            ease: "easeOut",
          },
        },
        exit: {
          scale: [1, 0.5, 4],
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      };
      return (
        <motion.div
          className={"backgroundCircle"}
          initial={{
            scale: 0.5,
          }}
          animate={"animate"}
          exit={"exit"}
          variants={circleVariants}
          key={`backgroundCircle-${id}`}
        />
      );
    };

    return (
      <motion.div
        className={`flavourImageWrapper ${id}`}
        initial={{ y: 80, opacity: 0 }}
        animate={"animate"}
        variants={imageVariants}
        exit={"exit"}
        layout
        key={`flavourImageWrapper-${id}`}
      >
        <div className={`graphicsWrapper`}>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="imageWrapper"
            key={`imageWrapper-${id}`}
          >
            <Image
              src={imageSource}
              alt={headerText}
              className="flavourImage"
            />
          </motion.div>
          {renderCircle()}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {!isUnmounting && (
        <motion.div
          className={`FlavourCardWrapper`}
          variants={cardExitVariants}
          exit={"exit"}
          onClick={() => active && handleFlavourDetailsClick()}
          key={`flavourCardWrapper-${id}`}
          ref={cardRef}
        >
          <motion.div
            className="flavourBackground"
            layoutId={`bg-${id}`}
            initial={false}
            key={`flavourBackground-${id}`}
          />
          {flavourImage()}
          <motion.div
            className={`contentWrapper`}
            onClick={callbackOnClick}
            key={`contentWrapper-${id}`}
            layout
          >
            <div className={`number ${id}Text`}>{sNo}</div>
            <h2 className="headerWrapper">{headerText}</h2>
            <p className="description">{description}</p>
            <button className="primaryButton">View</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlavourCard;
