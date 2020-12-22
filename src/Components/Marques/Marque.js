import React, { useEffect } from "react";
import ButtomButton from "./BottomButton";
import Brands from "./Brands";
import "./Marque.scss";
import MarTxt from "./MarTxt";
import Rellax from "rellax";

export default function Marque() {
  useEffect(() => {
    new Rellax(".mar_animate_txt", {
      // <---- Via class name
      speed: -4,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
      <div id="marqueContainer" className="mar_animate_txt">
        <Brands />
        <MarTxt />
        <ButtomButton />
      </div>
  );
}
