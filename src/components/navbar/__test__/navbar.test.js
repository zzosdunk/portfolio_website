import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../navbar";
import store from "../../../store/index";

import MessagesPL from "../../../translations/pl.json";
import MessagesUA from "../../../translations/ua.json";
import MessagesEN from "../../../translations/en.json";

function MockNavbar() {
    const messages = {
        Polish: MessagesPL,
        Ukrainian: MessagesUA,
        English: MessagesEN,
    };

    return (
        <Provider store={store}>
            <IntlProvider
                locale={navigator.language}
                messages={messages.English}
            >
                <Navbar />
            </IntlProvider>
        </Provider>
    );
}

describe("Navbar component", () => {
    it("should initialize navbar links", async () => {
        render(<MockNavbar />);
        const navbarElement = screen.getByText("about", { exact: false });
        expect(navbarElement).toBeInTheDocument();
    });
});
