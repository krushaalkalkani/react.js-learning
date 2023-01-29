import React from "react";
import ReactDOM from "react-dom";

// assign a variable
const fname = "Krushal";
const lname = "Kalkani";
const lNum = "9";

// assign  variable is use in h1 tag like, {in between}

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>Your lucky num is {lNum}</p>
    <p>Your lucky num is {3 + 5}</p>
    <p>Your lucky num is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
