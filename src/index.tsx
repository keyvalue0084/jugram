import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";
import App from "./views/App";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
