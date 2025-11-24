import React from "react";
import ReactDOM from "react-dom/client";
import Dither from "./Dither";

ReactDOM.createRoot(document.getElementById("dither-root")).render(
  <React.StrictMode>
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </div>
  </React.StrictMode>
);
