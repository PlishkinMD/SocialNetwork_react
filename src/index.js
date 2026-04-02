import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { socNetStore } from "./SocialNetwork_react/SocNet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={socNetStore}>
      <BrowserRouter basename="/SocialNetwork_react">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
