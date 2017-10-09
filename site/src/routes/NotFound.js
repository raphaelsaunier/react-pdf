import React from 'react';
import CornerGraphics from '../static/images/corner-graphics.png';

const NotFound = () =>
  <div>
    <img src={CornerGraphics} alt="" className="absolute t0 r0" />
    <h1 className="py1 px2 border-left border-thick border-red border-tip">
      404: Oops! This page does not exist
    </h1>
  </div>;

export default NotFound;
