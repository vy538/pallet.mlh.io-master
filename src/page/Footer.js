import React from "react";

const Footer = () => (
  <div className="bg-navy text-light">
    <div className="container py-4 clearfix">
      <small className="float-left">© Major League Hacking 2019.</small>
      <small className="float-right">
        <a
          href="https://github.com/MLH/pallet.mlh.io"
          className="text-light mr-3"
        >
          GitHub
        </a>
        <a href="mailto:engineering@mlh.io" className="text-light">
          Contact
        </a>
      </small>
    </div>
  </div>
);

export default Footer;
