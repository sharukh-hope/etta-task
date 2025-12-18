"use client";
import { Bangers, Mina, Outfit } from "next/font/google";
import NavigationBar from "@/app/components/NavigationBar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { flavours } from "../constants/flavours.js";
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

const fadeVariant = {
  init: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const FlavourDetails = ({ activeFlavourId, callTriggerReset }) => {
  /* state variables */
  const [currentActiveId, setCurrentActiveId] = useState(null);
  const [exitingId, setExitingId] = useState(null);
  const [animateDirection, setAnimateDirection] = useState("right");
  const [activeQuantity, setActiveQuantity] = useState(500);
  const [navButtonsActive, setNavButtonsActive] = useState(false);

  /* other hooks */
  // const controls = useAnimationControls();

  /* static variables */
  const quantities = [500, 125, 100];
  const bgGradientVariants = {
    animate: { opacity: 1, transition: { duration: 0.1 } },
    entryInit: {
      x: window?.innerWidth,
      y: window?.innerHeight,
      borderTopRightRadius: "100%",
      borderTopLeftRadius: "100%",
      borderBottomLeftRadius: "100%",
    },
    animateIn: {
      x: 0,
      y: 0,
      scale: 1,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      // borderRadius: "100%",
      transition: {
        scale: {
          duration: 0.75,
          ease: [0.9, 0, 0.14, 1],
        },
        borderBottomLeftRadius: {
          duration: 1,
          ease: "easeOut",
        },
        borderTopLeftRadius: {
          duration: 1,
          ease: "easeOut",
        },
        borderTopRightRadius: {
          duration: 1,
          ease: "easeOut",
        },
        x: {
          duration: 1,
          ease: [0.9, 0.01, 0.11, 1],
        },
        y: {
          duration: 1,
          ease: [0.9, 0.01, 0.11, 1],
        },
      },
    },
    exit: {
      x: window.innerWidth,
      y: window.innerHeight,
      scale: 0.5,
      borderTopRightRadius: "100%",
      borderTopLeftRadius: "100%",
      borderBottomLeftRadius: "100%",
      opacity: 0.75,
      transition: {
        scale: {
          duration: 1.25,
          ease: [0.9, 0, 0.14, 1],
        },
        borderBottomLeftRadius: {
          duration: 1.25,
          ease: "easeOut",
        },
        borderTopLeftRadius: {
          duration: 1.25,
          ease: "easeOut",
        },
        borderTopRightRadius: {
          duration: 1.25,
          ease: "easeOut",
        },
        x: {
          duration: 1.25,
          ease: [0.9, 0, 0.14, 1],
        },
        y: {
          duration: 1.25,
          ease: [0.9, 0, 0.14, 1],
        },
      },
    },
  };

  /* useRefs */

  const moveLeft = () => {
    Object.values(flavours).map((item, index, flavourArray) => {
      if (item.id === currentActiveId && flavourArray[index - 1]) {
        setTimeout(() => {
          setExitingId(flavourArray[index - 1]?.id);
          // setExitingId("blackberryBlast");
        }, 1500);

        setCurrentActiveId(flavourArray[index - 1]?.id);
        // setCurrentActiveId("orangeCrush");
      }
    });
  };
  const moveRight = () => {
    Object.values(flavours).map((item, index, flavourArray) => {
      if (item.id === currentActiveId && flavourArray[index + 1]) {
        setExitingId(flavourArray[index + 1]?.id);
        setCurrentActiveId(flavourArray[index + 1]?.id);
        // setCurrentActiveId("blackberryBlast");
        // setExitingId("blackberryBlast");
      }
    });
  };

  /* useEffects */
  useEffect(() => {
    setCurrentActiveId(activeFlavourId);
    // setExitingId(activeFlavourId);
  }, [activeFlavourId]);

  useEffect(() => {
    if (animateDirection) {
      if (animateDirection === "left") moveLeft();
      else if (animateDirection === "right") moveRight();
    }
  }, [animateDirection]);

  /* api calls */

  /* helper functions */

  const handleNext = () => {
    if (animateDirection === "right") moveRight();
    else setAnimateDirection("right");
  };
  const handlePrevious = () => {
    if (animateDirection === "left") moveLeft();
    else setAnimateDirection("left");
  };

  /* render functions */
  const renderQuantity = () => {
    return (
      <div className={`quantityItemsWrapper ${outfitFont.variable}`}>
        {quantities.map((item) => {
          return (
            <div
              key={`${currentActiveId}-${item}`}
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
    const imageVariants = {
      init: { x: window.innerWidth },
      animate: {
        x: 0,
        transition: {
          duration: 1,
          ease: [1, 0.01, 0.11, 0.8],
        },
      },
      exit: {
        x: window.innerWidth,
        transition: {
          duration: 1,
          ease: [1, 0.01, 0.11, 0.8],
        },
      },
    };
    return (
      <div className="flavourImageWrapper">
        <AnimatePresence mode="popLayout">
          <motion.div
            className="imageMotionWrapper"
            variants={imageVariants}
            initial="init"
            animate="animate"
            exit={"exit"}
            key={`${currentActiveId}-img`}
          >
            <Image
              src={flavours[currentActiveId].imageSource}
              alt={flavours[currentActiveId].headerText}
              className="flavourImage"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        <div className={`${bangers.variable} backgroundText`}>Juicy</div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${currentActiveId}-mama`}
            className="backgroundEffect"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,

              transition: {
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
          >
            {flavours[currentActiveId].bgImageSource && (
              <Image
                src={flavours[currentActiveId].bgImageSource}
                alt={`${currentActiveId}-bg`}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="arrowsWrapper">
          <button
            className="iconLeftArrow iconArrow"
            onClick={handlePrevious}
          />
          <button className="iconRightArrow iconArrow" onClick={handleNext} />
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
            key={`h1-${currentActiveId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              // ease: "linear",
            }}
          >
            {flavours[currentActiveId].headerText}
          </motion.h1>
        </AnimatePresence>
        <p className="descriptionText">
          {flavours[currentActiveId].detailedDescription}
        </p>
        <button className="primaryButton">View</button>
      </div>
    );
  };
  const animateRight = animateDirection === "right";

  if (!currentActiveId)
    return (
      <div className={`FlavourDetailsWrapper ${activeFlavourId}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`exit-${activeFlavourId}`}
            className={`backgroundGradient ${activeFlavourId} z`}
            layoutId={`bg-${activeFlavourId}`}
            transition={{
              layout: { duration: 1, ease: "easeInOut", delay: 0.5 },
            }}
            onLayoutAnimationComplete={() => {
              setNavButtonsActive(true);
              setExitingId(activeFlavourId);
            }}
          />
        </AnimatePresence>
      </div>
    );

  return (
    <div className={`FlavourDetailsWrapper ${currentActiveId}`}>
      {/* <div className="backgroundGradient" /> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`exit-${currentActiveId}`}
          className={`backgroundGradient ${currentActiveId} z`}
          initial={!animateRight ? "entryInit" : false}
          variants={bgGradientVariants}
          animate={!animateRight ? "animateIn" : "animate"}
          exit={!animateRight ? false : "exit"}
        />
      </AnimatePresence>

      <motion.div
        key={`sudo-${exitingId}`}
        className={`backgroundGradient ${exitingId} x`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <AnimatePresence>
        <motion.div
          initial={"init"}
          className="allContentWrapper"
          variants={fadeVariant}
          animate={"animate"}
          exit={"exit"}
        >
          <NavigationBar
            callbackOnFlavoursClick={callTriggerReset}
            disableClick={!navButtonsActive}
          />

          {renderQuantity()}
          {renderCentralImageCarousel()}
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlavourDetails;
