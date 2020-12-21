import React from "react";
import Loc from "../../Assets/placeholder.svg";
import Time from "../../Assets/time.svg";
import Phone from "../../Assets/phone-call.svg";

export default function MagInfos() {
  return (
    <div id="MagInfos">
      <div className="Overlay-image">
        <div className="title">
          <p className="title-bar">-</p>
          <p className="title-text">
            Notre
            <br /> Magasin
          </p>
        </div>
        <table>
          <tr>
            <th>
              <img src={Loc} alt="Localisation" />
            </th>
            <th>
              5 Rue d'Isle,
              <br />
              02100 Saint-Quentin
            </th>
          </tr>
          <tr style={{ position: "relative" }}>
            <th>
              <img src={Time} alt="Localisation" />
            </th>
            <th>
              <tr>
                <th>Lundi </th>
                <th>: 10h - 19h</th>
              </tr>
              <tr>
                <th>Mardi </th>
                <th>: 10h - 19h</th>
              </tr>
              <tr>
                <th>Mercredi </th>
                <th>: 10h - 19h</th>
              </tr>
              <tr>
                <th>Jeudi </th>
                <th>: 10h - 19h</th>
              </tr>
              <tr>
                <th>Vendredi </th>
                <th>: 10h - 19h</th>
              </tr>
              <tr>
                <th>Samedi </th>
                <th>: 10h - 19h</th>
              </tr>
            </th>
          </tr>
          <tr>
            <th>
              <img src={Phone} alt="Phone" />
            </th>
            <th>03 23 63 27 39</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
