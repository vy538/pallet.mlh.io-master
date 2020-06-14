import React from "react";

const Navbar = () => (
  <div className="bg-navy text-white py-2">
    <nav className="nav d-flex justify-content-between px-3">
      <div className="d-flex w-50">
        <a href="/" className="d-flex align-items-center w-100">
          <img
            className="mx-3"
            src={require("../images/mlh-logo-monochrome-yellow.svg")}
            style={{ height: "26px" }}
            alt="Major League Hacking"
          />
          <h5 className="font-size-4 text-yellow px-2 py-3 m-0">Pallet Wrap</h5>
        </a>
      </div>
      <div className="d-flex">
        <a
          className="text-white text-semibold p-3"
          href="https://github.com/mlh/pallet-wrap-css"
        >
          Stylesheets
        </a>
        <a
          className="text-white text-semibold p-3"
          href="https://github.com/MLH/pallet.mlh.io"
        >
          GitHub
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
