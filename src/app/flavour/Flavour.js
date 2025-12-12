import React from "react";
import FlavourCard from "./FlavourCard";

const Flavour = ({}) => {
  /* state variables */

  /* other hooks */

  /* static variables */
  const flavours = [
    {
      id: 1,
      headerText: "Cheeky lime",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      textClass: "limeText",
    },
    {
      id: 2,
      headerText: "Orange Crush",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      textClass: "orangeText",
    },
    {
      id: 3,
      headerText: "Strawberry Yum",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      textClass: "strawberryText",
    },
    {
      id: 4,
      headerText: "Blackberry Blast",
      description:
        "Discover a world of vibrant flavors with our premium juice selection.",
      textClass: "blackCurrantText",
    },
  ];

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */

  return (
    <div className="FlavourWrapper">
      {flavours.map((flavour) => {
        return (
          <FlavourCard
            key={flavour.id}
            id={flavour.id}
            headerText={flavour.headerText}
            description={flavour.description}
            textClassName={flavour.textClass}
          />
        );
      })}
    </div>
  );
};

export default Flavour;
