import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./SimpleMap";
import { Button } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: "100%", height: "400px" }}>
      <SimpleMap />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
