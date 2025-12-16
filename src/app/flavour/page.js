"use client";

import React, { useState } from "react";
import FlavourCard from "./FlavourCard";

import { flavours } from "../constants/flavours.js";
import FlavourDetails from "./FlavourDetails";
import { AnimatePresence, motion } from "framer-motion";

const Flavour = ({}) => {
  /* state variables */
  const [activeFlavour, setActiveFlavour] = useState("");
  const [showFlavourDetails, setShowFlavourDetails] = useState(false);
  const [showFlavourMenu, setShowFlavourMenu] = useState(true);

  /* other hooks */

  /* static variables */

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */
  const renderFlavourDetails = () => {
    if (!showFlavourDetails) return null;
    if (!activeFlavour) return null;
    return (
      <FlavourDetails
        activeFlavourId={activeFlavour}
        callTriggerReset={() => {
          setShowFlavourMenu(true);
          setShowFlavourDetails(false);
          setActiveFlavour(null);
        }}
        callbackOnNext={() => setActiveFlavour("orangeCrush")}
        callbackOnPrevious={() => setActiveFlavour("blackberryBlast")}
      />
    );
  };
  const renderFlavourMenu = () => {
    if (!showFlavourMenu) return null;
    return (
      <div className="FlavourWrapper">
        {Object.values(flavours).map((flavour, index) => {
          return (
            <FlavourCard
              key={flavour.id}
              id={flavour.id}
              sNo={index + 1}
              headerText={flavour.headerText}
              description={flavour.description}
              textClassName={flavour.textClass}
              callbackOnClick={() => setActiveFlavour(flavour.id)}
              active={activeFlavour === flavour.id}
              imageSource={flavour.imageSource}
              callbackToShowFlavourDetails={() => setShowFlavourDetails(true)}
              onExitComplete={() => {
                setShowFlavourMenu(false);
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      {renderFlavourDetails()}
      {renderFlavourMenu()}
      {/* </AnimatePresence> */}
    </>
  );
};

export default Flavour;
