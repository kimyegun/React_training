import React from "react";
import ColorCunsumer from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorCunsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorCunsumer>
  );
};

export default ColorBox;
