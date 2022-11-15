import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlockTitle from "./BlockTitle";

import MessagesPL from "../../translations/pl.json";
import MessagesUA from "../../translations/ua.json";
import MessagesEN from "../../translations/en.json";

function MockBlockTitle({ mockTitle }) {
    const messages = {
        Polish: MessagesPL,
        Ukrainian: MessagesUA,
        English: MessagesEN,
    };

    return (
        <IntlProvider locale={navigator.language} messages={messages.English}>
            <BlockTitle title={mockTitle} />
        </IntlProvider>
    );
}

MockBlockTitle.propTypes = {
    mockTitle: PropTypes.string.isRequired,
};

describe("BlockTitle component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("renders Blocktitle", () => {
        render(<MockBlockTitle mockTitle="CONTACT ME" />);

        const blocktitleElement = screen.getByText("CONTACT ME");
        expect(blocktitleElement).toBeInTheDocument();
    });
});
