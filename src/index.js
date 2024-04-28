import React from "react";
import ReactDOM from "react-dom";

export function mount() {
  console.log("Microfrontend mounted");
}

const Microfrontend = () => {
  return <h1>Hello from a React Microfrontend!</h1>;
};

ReactDOM.render(<Microfrontend />, document.getElementById("root"));

export default Microfrontend;
