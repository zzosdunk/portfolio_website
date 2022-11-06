import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import messages_pl from "./translations/pl.json";
import messages_ua from "./translations/ua.json";

import "./index.css";
import App from "./App";
import store from "./store/index";

const messages = {
  'pl': messages_pl,
  'ua': messages_ua
};

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <IntlProvider locale={navigator.language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </Provider>
);
