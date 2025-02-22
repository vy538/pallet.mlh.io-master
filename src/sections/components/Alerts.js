import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Alerts = () => (
  <ScrollableAnchor id="alerts">
    <section className="py-3 mb-3">
      <h2 className="h4">Alerts</h2>
      <hr className="mt-1 mb-4" />

      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        This is a secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>
    </section>
  </ScrollableAnchor>
);

export default Alerts;
