import { IntlProvider } from "react-intl";

import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "./Projects";

import MessagesPL from "../../translations/pl.json";
import MessagesUA from "../../translations/ua.json";
import MessagesEN from "../../translations/en.json";

function MockProjects() {
    const messages = {
        Polish: MessagesPL,
        Ukrainian: MessagesUA,
        English: MessagesEN,
    };

    return (
        <IntlProvider locale={navigator.language} messages={messages.English}>
            <Projects />
        </IntlProvider>
    );
}

describe("Projects component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("renders Projects", async () => {
        render(<MockProjects />);

        await waitForElementToBeRemoved(
            screen.queryByText("Loading", { exact: false })
        ).then(() => {
            const skillsListElement = screen.getByText("Tank Squad");
            expect(skillsListElement).toBeInTheDocument();
        });
    });
});
