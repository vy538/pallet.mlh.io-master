import React, { useState,Component } from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "../sections/components/Themes";
import { GlobalStyles } from "../sections/components/GlobalStyles";
import Button from "../components/Button";



function Navbar(){

  const [theme, setTheme] = useState('light');
const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

  return(<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
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
        <a
          className="text-white text-semibold p-3"
          onClick={toggleTheme}
        >
          Dark Mode
        </a>
      </div>
    </nav>
  </div>

  </>
  </ThemeProvider>);
}



export default Navbar;
