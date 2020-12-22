import React, { useEffect } from "react";
import ButtomButton from "./BottomButton";
import "./Magasin.scss";
import MagBanner from "./MagBanner";
import MagInfos from "./MagInfos";
import MagTxt from "./MagTxt";
import Rellax from "rellax";

export default function Magasin() {
  useEffect(() => {
    new Rellax(".mag_animate_txt", {
      // <---- Via class name
      speed: 3,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <div id="Magasin-container" className="mag_animate_txt">
        <MagBanner />

      <MagInfos />
        <MagTxt />

      <ButtomButton />
    </div>
  );
}
