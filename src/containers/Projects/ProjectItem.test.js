import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectItem from "./ProjectItem";

import MessagesPL from "../../translations/pl.json";
import MessagesUA from "../../translations/ua.json";
import MessagesEN from "../../translations/en.json";

function MockProjectItem({
    imgUrl,
    leaderStatus,
    date,
    text,
    description,
    translationID,
}) {
    const messages = {
        Polish: MessagesPL,
        Ukrainian: MessagesUA,
        English: MessagesEN,
    };

    return (
        <IntlProvider locale={navigator.language} messages={messages.English}>
            <ProjectItem
                imgUrl={imgUrl}
                leaderStatus={leaderStatus}
                date={date}
                text={text}
                description={description}
                translationID={translationID}
            />
        </IntlProvider>
    );
}

MockProjectItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    leaderStatus: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    translationID: PropTypes.string.isRequired,
};

describe("ProjectItem component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("renders Blocktitle", () => {
        render(
            <MockProjectItem
                imgUrl="urlPath"
                leaderStatus={false}
                date="date"
                text="projectName"
                description="projectDescription"
                translationID="projectTranslation"
            />
        );

        const projectItemElement = screen.getByText("projectName");
        expect(projectItemElement).toBeInTheDocument();
    });
});
