import React from "react";

const Header = () => (
  <header className="header bg-navy bg-navy text-light p-5">
    <div className="container py-5 px-5 mb-5">
      <h1 className="font-size-1 text-lighter text-yellow lh-title mb-2 space-mono">
        Pallet Wrap CSS<span className="font-size-4 ml-3">v0.2.1</span>
      </h1>
      <h3
        className="font-weight-normal text-light-gray mb-4"
        style={{ maxWidth: "750px" }}
      >
        Resources and stylesheets for building interfaces with MLH's design
        system.
      </h3>
      <a
        className="btn btn-primary btn-lg border-radius-1 mt-2"
        href="https://github.com/MLH/pallet-wrap-css/archive/master.zip"
      >
        Download
      </a>
    </div>
  </header>
);

export default Header;
