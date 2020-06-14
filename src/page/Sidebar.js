import React from "react";

const Anchor = ({ to, children }) => (
  <a href={to} className="py-2 px-3 font-size-6 system">
    {children}
  </a>
);

const Sidebar = () => (
  <div className="system">
    <div className="border-bottom border-light-gray d-flex flex-column px-2 py-3 w-100">
      <div className="text-semibold px-3 py-2">Utilities</div>
      <Anchor to="#colors">Colors</Anchor>
      <Anchor to="#typography">Typography</Anchor>
    </div>
    <div className="d-flex flex-column px-2 py-3 w-100">
      <div className="text-semibold px-3 py-2">Components</div>
      <Anchor to="#buttons">Buttons</Anchor>
      <Anchor to="#forms">Forms</Anchor>
      <Anchor to="#breadcrumbs">Breadcrumbs</Anchor>
      <Anchor to="#avatars">Avatars</Anchor>
      <Anchor to="#navbars">Navbar</Anchor>
      <Anchor to="#alerts">Alerts</Anchor>
    </div>
  </div>
);

export default Sidebar;
