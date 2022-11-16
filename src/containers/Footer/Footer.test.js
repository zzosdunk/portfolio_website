import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer component", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    });
    test("footer date correct", () => {
        render(<Footer />);

        const d = new Date();
        const currentYear = d.getFullYear();

        const helloWorldElement = screen.getByText(currentYear, {
            exact: false,
        });
        expect(helloWorldElement).toBeInTheDocument();
    });
});
