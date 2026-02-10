import Link from "next/link";

import React from "react";

const NavigationBar = ({ callbackOnFlavoursClick, disableClick = true }) => {
  return (
    <div className="NavigationBarWrapper">
      <Link href={"#"} className="navLink mainLogo">
        Juicy
      </Link>
      <nav className="navLinks">
        <div
          href={"/flavour"}
          className="navLink"
          onClick={() => !disableClick && callbackOnFlavoursClick()}
        >
          Flavours
        </div>
        <Link href={"#"} className="navLink disabled">
          Drinks
        </Link>
        <Link href={"#"} className="navLink disabled">
          Fruit
        </Link>
        <Link href={"#"} className="navLink disabled">
          About
        </Link>
        <Link href={"#"} className="navLink disabled">
          Contact
        </Link>
      </nav>
      <div className="userSpace">
        <button
          className="iconButton iconUser"
          style={{ cursor: "not-allowed" }}
        ></button>
        <button
          className="iconButton iconCart"
          style={{ cursor: "not-allowed" }}
        >
          <div className="cartItemsNumber">2</div>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
