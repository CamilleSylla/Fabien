import React, { useEffect } from "react";
import Facebook from "../../Assets/facebook.svg";
import Instagram from "../../Assets/instagram.svg";
import Rellax from "rellax";

export default function Banner() {

  useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate2", { // <---- Via class name
      speed: 8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate3", { // <---- Via class name
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate4", { // <---- Via class name
      speed: 6,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate5", { // <---- Via class name
      speed: -3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate6", { // <---- Via class name
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

  return (
    <div id="HeroBanner-content" className="animate6">
      <div id="heroIcons">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
      </div>
      <div id="heroContent">
        <div id="slogan" className="animate2">
          <p id="slogantxt">
            Marque
            <br />
            les
            <br />
            styles
          </p>
        </div>
        <div id="HeroBanner-image" className="animate3">
          <div className="Overlay-image"></div>
        </div>
        <div id="FabienL" className="animate5">
          <h1>FABIEN</h1>
        </div>
        <div id="year" className="animate">
          20
          <br />
          04
        </div>
        <p id="Since">- Depuis -</p>
        <div id="HeroTxt" className="animate4">
          <h3>
            VOTRE
            <br />
            MAGASIN
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sapien sem, dapibus sit amet cursus quis, efficitur eu quam.
          </p>
        </div>
        <h1 id="FLogo" className="animate4">FABIEN</h1>
      </div>
    </div>
  );
}
