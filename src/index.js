import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const prepare = async () => {
    if (process.env.REACT_APP_MOCK_ENABLED === "true") {
        await import("./mocks/browser").then(async (worker) => {
            await worker.default.start();
        });
    }
};

prepare().then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
