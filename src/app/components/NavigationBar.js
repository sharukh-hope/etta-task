import Link from "next/link";

import React from "react";

const NavigationBar = ({}) => {
  return (
    <div className="NavigationBarWrapper">
      <Link href={"#"} className="navLink mainLogo">
        Juicy
      </Link>
      <nav className="navLinks">
        <Link href={"/flavour"} className="navLink">
          Flavours
        </Link>
        <Link href={"#"} className="navLink">
          Drinks
        </Link>
        <Link href={"#"} className="navLink">
          Fruit
        </Link>
        <Link href={"#"} className="navLink">
          About
        </Link>
        <Link href={"#"} className="navLink">
          Contact
        </Link>
      </nav>
      <div className="userSpace">
        <button className="iconButton iconUser"></button>
        <button className="iconButton iconCart">
          <div className="cartItemsNumber">2</div>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
