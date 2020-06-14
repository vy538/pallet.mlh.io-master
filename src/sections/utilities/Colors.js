import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Colors = () => (
  <ScrollableAnchor id="colors">
    <section className="py-3 mb-3">
      <h2 className="h4">Colors</h2>
      <hr className="mt-1 mb-4" />

      <p className="h6">Branding Colors</p>
      <div className="container mb-4">
        <div className="row mb-2">
          <div className="bg-red text-white col-sm p-3 mr-2">.bg-red</div>
          <div className="bg-blue text-white col-sm p-3 mr-2">.bg-blue</div>
          <div className="bg-yellow col-sm p-3">.bg-yellow</div>
        </div>
        <div className="row">
          <div className="bg-navy text-white col-sm p-3">.bg-navy</div>
        </div>
      </div>

      <p className="h6">Functional Colors</p>
      <div className="container mb-4">
        <div className="row mb-2 text-white">
          <div className="bg-near-black col-sm p-3 mr-2">.bg-near-black</div>
          <div className="bg-dark-gray col-sm p-3 mr-2">.bg-dark-gray</div>
          <div className="bg-mid-gray col-sm p-3 mr-2">.bg-mid-gray</div>
          <div className="bg-gray col-sm p-3">.bg-gray</div>
        </div>
        <div className="row mb-2">
          <div className="bg-silver text-white col-sm p-3 mr-2">.bg-silver</div>
          <div className="bg-light-gray col-sm p-3 mr-2">.bg-light-gray</div>
          <div className="bg-near-white col-sm p-3 mr-2">.bg-near-white</div>
          <div className="bg-white col-sm p-3 border">.bg-white</div>
        </div>
      </div>
      <p className="h6">Background Colors</p>
      <div className="container mb-4">
        <div className="row mb-2">
          <div className="bg-near-white col-sm p-3 mr-2">.bg-near-white</div>
          <div className="bg-washed-red col-sm p-3 mr-2">.bg-washed-red</div>
          <div className="bg-washed-blue col-sm p-3 mr-2">.bg-washed-blue</div>
          <div className="bg-washed-yellow col-sm p-3">.bg-washed-yellow</div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Colors;
