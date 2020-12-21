import React from "react";
import Arrow from '../../Assets/down-arrow.svg'
export default function MarTxt() {
  return (
    <div id="MarTxt">
      <div id="marTitle">
          <img src={Arrow} alt="Arrow"/>
        <div className="title">
          <p className="title-bar">-</p>
          <p className="title-text">
            Nos
            <br /> Marques
          </p>
        </div>
      </div>
      <div id="marContContent">
      <div id="marContent">
          <h1 className="content-title">Inspirer votre quotidien</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            cursus laoreet lectus, iaculis finibus sapien congue at.
            Pellentesque sed nulla fringilla, pulvinar nunc non, mattis nunc.
            Cras vel scelerisque elit, vitae cursus sapien. Pellentesque
            volutpat volutpat arcu sit amet finibus.
          </p>
          <h1 className="content-title">Votre style à la pointe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            cursus laoreet lectus, iaculis finibus sapien congue at.
            Pellentesque sed nulla fringilla, pulvinar nunc non, mattis nunc.
            Cras vel scelerisque elit, vitae cursus sapien. Pellentesque
            volutpat volutpat arcu sit amet finibus.
          </p>
        </div>
        <div id="marSub">
          <div>
          <p>2</p>
          </div>
          
          <h1>Les plus grandes marques</h1>
        </div>
      </div>
      
    </div>
  );
}
