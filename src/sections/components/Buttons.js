import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Button from "../../components/Button";

const Buttons = () => (
  <ScrollableAnchor id="buttons">
    <section className="py-3 mb-5">
      <h2 className="h4">Buttons</h2>
      <hr className="mt-1 mb-4" />

      <div className="row">
        <div className="col-lg-6">
          <p className="h6">Default Buttons</p>
          <div className="mb-4">
            <Button className="mr-2">Button</Button>
            <Button small>Small button</Button>
          </div>

          <p className="h6">Primary Buttons</p>
          <div className="mb-4">
            <Button className="mr-2" primary>
              Button
            </Button>
            <Button className="mr-2" primary small>
              Small button
            </Button>
            <Button className="mr-2" primary outline>
              Button
            </Button>
            <Button className="mr-2" primary outline small>
              Small Button
            </Button>
          </div>

          <p className="h6">Danger Buttons</p>
          <div className="mb-4">
            <Button className="mr-2" danger>
              Button
            </Button>
            <Button className="btn btn-danger btn-sm mr-2" danger small>
              Small button
            </Button>
            <Button className="mr-2" danger outline>
              Button
            </Button>
            <Button className="mr-2" danger outline small>
              Small button
            </Button>
          </div>

          <p className="h6">Large Buttons</p>
          <div className="mb-4">
            <Button className="mr-2" primary large>
              Button
            </Button>
            <Button className="mr-2" primary outline large>
              Button
            </Button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <p className="h6">Block Buttons</p>
          <Button className="mb-4" primary large block>
            Block level button
          </Button>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Buttons;
