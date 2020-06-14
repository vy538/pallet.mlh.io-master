import React, { Component } from "react";
import "./App.css";

import Alerts from "./sections/components/Alerts";
import Avatars from "./sections/components/Avatars";
import Breadcrumbs from "./sections/components/Breadcrumbs";
import Buttons from "./sections/components/Buttons";
import Forms from "./sections/components/Forms";
import Navbars from "./sections/components/Navbars";

import Colors from "./sections/utilities/Colors";
// import Spacing from "./utilities/Spacing";
import Typography from "./sections/utilities/Typography";

import Footer from "./page/Footer";
import Header from "./page/Header";
import Navbar from "./page/Navbar";
import Sidebar from "./page/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex">
          <div
            className="bg-near-white border border-light-gray"
            style={{ minWidth: "260px" }}
          >
            <Sidebar />
          </div>
          <div className="w-100">
            <Header />
            <div className="container my-5 py-5 px-5">
              <Colors />
              <Typography />
              <Buttons />
              <Forms />
              <Breadcrumbs />
              <Avatars />
              <Navbars />
              <Alerts />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
