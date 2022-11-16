import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillItem from "./SkillItem";

describe("SkillItem component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("renders Blocktitle", () => {
        render(<SkillItem skillName="Skill Name" skillIconPath="urlPath" />);

        const blocktitleElement = screen.getByText("Skill Name");
        expect(blocktitleElement).toBeInTheDocument();
    });

    test("missing props", () => {
        expect(() => render(<SkillItem />)).not.toThrowError();
    });
});
