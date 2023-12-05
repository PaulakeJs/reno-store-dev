import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider 
  store={store}
  >
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#00b96b",
            colorPrimaryHover: "#00b96b",
            borderRadius: "0px",
          },
        },
        token: {
          borderRadius: "2px",
          colorPrimary: "#00b96b",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
