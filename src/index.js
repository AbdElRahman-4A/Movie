import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import App from "./components/App/App";
import MediaContextProvider from "./Context/MediaStore";
import AuthStoreContextProvider from "./Context/AuthStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthStoreContextProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </AuthStoreContextProvider>
  </React.StrictMode>
);

reportWebVitals();
