import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { expect, test } from "vitest";

export const basicComponentsTest = (componentTestId, prop) => {
    test("should be able to render the component", () => {
        expect(screen.getByTestId(componentTestId)).toBeInTheDocument();
    });

    test("should be able to render based on the children prop", () => {
        expect(screen.getByTestId(componentTestId)).toHaveTextContent(prop);
    });
};
