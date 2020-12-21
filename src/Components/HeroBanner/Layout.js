import React from "react";
import Magasin from "../Magasin/Magasin";
import Banner from "./Banner";
import HeroButtons from "./HeroButtons";
import "./Layout.scss";

export default function Layout() {
  return (
      <div id="Layout-container">
          <Banner/>
          <HeroButtons/>
      </div>
  );
}
