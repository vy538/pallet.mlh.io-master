import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const image = require("../../images/quinlan.jpg");

const Avatars = () => (
  <ScrollableAnchor id="avatars">
    <section className="py-3 mb-3">
      <h2 className="h4">Avatars</h2>
      <hr className="mt-1 mb-4" />

      <div className="d-flex">
        <div className="mr-5">
          <p className="h6">Basic Example</p>
          <div className="py-2">
            <img className="avatar mr-2" alt="YayNickQ" src={image} />
            <span>.avatar</span>
          </div>
        </div>
        <div className="mr-4">
          <p className="h6">Small avatars</p>
          <div className="py-2">
            <img
              className="avatar avatar-small mr-2"
              alt="YayNickQ"
              src={image}
            />
            <span>.avatar-small</span>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Avatars;
