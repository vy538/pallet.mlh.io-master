import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  children,
  small,
  large,
  block,
  primary,
  outline,
  danger,
  className
}) => (
  <button
    className={cx(
      "btn",
      {
        "btn-sm": small,
        "btn-lg": large,
        "btn-block": block,
        "btn-primary": primary && !outline,
        "btn-outline-primary": primary && outline,
        "btn-danger": danger && !outline,
        "btn-outline-danger": danger && outline
      },
      className
    )}
  >
    {children}
  </button>
);

export default Button;
