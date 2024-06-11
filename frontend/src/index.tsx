import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
            <App />
          <ToastContainer />
    </BrowserRouter>
     </Provider>
  </React.StrictMode>
);
