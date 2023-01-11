import React from "react";

const Icon = (props) => {
  return (
    <a
      style={{
        backgroundImage: `url(${props.icon})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: 35,
        height: 35,
        marginTop: 20,
        margin: 20,
        opacity: 0.5,
      }}
      href={props.link}
      target="_blank"
    ></a>
  );
};

export default Icon;
