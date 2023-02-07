import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Component from "./Component";

function App() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default App;
