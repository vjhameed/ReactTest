import React from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import createStore from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
