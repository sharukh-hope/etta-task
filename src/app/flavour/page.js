"use client";

import React, { useState } from "react";
import FlavourCard from "./FlavourCard";
import cheeky from "../../../public/flavours/cheeky.png";
import orange from "../../../public/flavours/orange.png";
import strawberry from "../../../public/flavours/strawberry.png";
import blackberry from "../../../public/flavours/blackberry.png";

const Flavour = ({}) => {
  /* state variables */
  const [activeFlavour, setActiveFlavour] = useState("");

  /* other hooks */

  /* static variables */
  const flavours = [
    {
      id: "cheekyLime",
      headerText: "Cheeky lime",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      imageSource: cheeky,
    },
    {
      id: "orangeCrush",
      headerText: "Orange Crush",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      imageSource: orange,
    },
    {
      id: "strawberryYum",
      headerText: "Strawberry Yum",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      imageSource: strawberry,
    },
    {
      id: "blackberryBlast",
      headerText: "Blackberry Blast",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      imageSource: blackberry,
    },
  ];

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */

  return (
    <div className="FlavourWrapper">
      {flavours.map((flavour, index) => {
        return (
          <FlavourCard
            key={flavour.id}
            id={flavour.id}
            sNo={index + 1}
            headerText={flavour.headerText}
            description={flavour.description}
            textClassName={flavour.textClass}
            callbackOnClick={() => {
              console.log(flavour.id);
              setActiveFlavour(flavour.id);
            }}
            active={activeFlavour === flavour.id}
            imageSource={flavour.imageSource}
          />
        );
      })}
    </div>
  );
};

export default Flavour;
