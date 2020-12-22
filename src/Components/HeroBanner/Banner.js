import React from "react";
import Facebook from "../../Assets/facebook.svg";
import Instagram from "../../Assets/instagram.svg";

export default function Banner() {
  return (
    <div id="HeroBanner-content">
      <div id="heroIcons">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
      </div>
      <div id="heroContent">
        <div id="slogan">
          <p id="slogantxt">
            Marque
            <br />
            les
            <br />
            styles
          </p>
        </div>
        <div id="HeroBanner-image">
          <div className="Overlay-image"></div>
        </div>
        <div id="FabienL">
          <h1>FABIEN</h1>
        </div>
        <div id="year">
          20
          <br />
          04
        </div>
        <p id="Since">- Depuis -</p>
        <div id="HeroTxt">
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
        <h1 id="FLogo">FABIEN</h1>
      </div>
    </div>
  );
}
