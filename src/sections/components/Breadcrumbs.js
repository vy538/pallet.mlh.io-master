import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Breadcrumbs = () => (
  <ScrollableAnchor id="breadcrumbs">
    <section className="py-3 mb-3">
      <h2 className="h4">Breadcrumbs</h2>
      <hr className="mt-1 mb-4" />

      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Home</li>
      </ol>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active">Library</li>
      </ol>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/">Library</a>
        </li>
        <li className="breadcrumb-item active">Data</li>
      </ol>
    </section>
  </ScrollableAnchor>
);

export default Breadcrumbs;
