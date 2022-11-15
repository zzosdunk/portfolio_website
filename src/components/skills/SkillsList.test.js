import { IntlProvider } from "react-intl";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillsList from "./SkillsList";

import MessagesPL from "../../translations/pl.json";
import MessagesUA from "../../translations/ua.json";
import MessagesEN from "../../translations/en.json";

function MockSkillsList() {
    const messages = {
        Polish: MessagesPL,
        Ukrainian: MessagesUA,
        English: MessagesEN,
    };

    return (
        <IntlProvider locale={navigator.language} messages={messages.English}>
            <SkillsList />
        </IntlProvider>
    );
}

describe("SkillsList component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("renders SkillList", () => {
        render(<MockSkillsList />);

        const skillsListElement = screen.getByText("JavaScript");
        expect(skillsListElement).toBeInTheDocument();
    });
});
