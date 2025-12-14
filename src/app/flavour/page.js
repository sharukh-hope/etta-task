"use client";

import React, { useState } from "react";
import FlavourCard from "./FlavourCard";

import { flavours } from "../constants/flavours.js";

const Flavour = ({}) => {
  /* state variables */
  const [activeFlavour, setActiveFlavour] = useState("");

  /* other hooks */

  /* static variables */
  // const flavours = [
  //   {
  //     id: "cheekyLime",
  //     headerText: "Cheeky lime",
  //     description:
  //       "Discover a world of vibrant flavors with our premium juice selection.",
  //     imageSource: cheeky,
  //   },
  //   {
  //     id: "orangeCrush",
  //     headerText: "Orange Crush",
  //     description:
  //       "Discover a world of vibrant flavors with our premium juice selection.",
  //     imageSource: orange,
  //   },
  //   {
  //     id: "strawberryYum",
  //     headerText: "Strawberry Yum",
  //     description:
  //       "Discover a world of vibrant flavors with our premium juice selection.",
  //     imageSource: strawberry,
  //   },
  //   {
  //     id: "blackberryBlast",
  //     headerText: "Blackberry Blast",
  //     description:
  //       "Discover a world of vibrant flavors with our premium juice selection.",
  //     imageSource: blackberry,
  //   },
  // ];

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */

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
          />
        );
      })}
    </div>
  );
};

export default Flavour;
