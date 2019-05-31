import React from "react";

const DrawAtribute = ({ text, value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}
    >
      <h5 style={{ marginRight: "3px", color: "#D5E4F5" }}>{text} :</h5>
      <p style={{ color: "#211825" }}>
        {typeof value === "number" ? Math.round(value) : value}
      </p>
    </div>
  );
};

export default DrawAtribute;
