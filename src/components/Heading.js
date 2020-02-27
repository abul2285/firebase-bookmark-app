import React from "react";

const Heading = ({ children, ...restOfProps }) => {
  return (
    <div className="heading-wrapper" {...restOfProps}>
      <h2 className="heading">{children}</h2>
    </div>
  );
};

export default Heading;
