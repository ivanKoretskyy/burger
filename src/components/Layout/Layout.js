import React from "react";

const layout = props => {
  return (
    <>
      <div>Toolbar</div>
      <main>{props.children}</main>
    </>
  );
};

export default layout;
