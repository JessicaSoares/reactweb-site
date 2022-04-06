import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { HashRouter  as Router } from "react-router-dom";
import ScrollToTop from "./components/Scrolltop";
  
ReactDOM.render(
    <Provider store={store}>
        <Router>
        <ScrollToTop />
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
