import React, { Component } from "react";
import Media from "react-media";

const breakpoint = 500;

const App = () => (
  <Media query={{ minWidth: breakpoint }}>
    {matches => (
      <div>
        <p>
      Breakpoint: {breakpoint}
      px
    </p>
    <p>
      Current match:&nbsp;
      {matches ? "Big" : "Small"}
    </p>
      </div>
    )}
  </Media>
);

export default App;
