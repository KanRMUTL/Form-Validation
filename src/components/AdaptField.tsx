import React from "react";

const AdaptField = (Component: React.ComponentType) => (props: any) =>
  <Component {...props.field} />;

export default AdaptField;
