import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import BasicLoading from "./lottie/BasicLoading";
import { UserProvider } from "./context/UserContext";

const App = lazy(() => import("./views/App"));

ReactDOM.render(
  <UserProvider>
    <Suspense fallback={<BasicLoading />}>
      <App />
    </Suspense>
  </UserProvider>,
  document.getElementById("root")
);
