import React from "react";

const Writer = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        paddingLeft: "6%",
        paddingRight: "6%",
        paddingTop: 40,
        paddingBottom: 30,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 80,
          borderRadius: 50,
          width: 80,
          margin: "auto",
          border: "1px solid white",
        }}
      />
      <h3 style={{ color: "white" }}>{props.name}</h3>
    </div>
  );
};

export default Writer;
