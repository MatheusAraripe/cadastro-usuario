import "@testing-library/jest-dom";
import { getByText, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import SuccessAlert from "./SuccessAlert";

const alertTestId = "alert";

describe("SuccessAlert", () => {
    beforeEach(() => {
        render(<SuccessAlert message={"cadastrado"} />);
    });
    test("should be able to render the success alert", () => {
        expect(screen.getByTestId(alertTestId)).toBeInTheDocument();
    });

    test("should be able to render based on the children prop", () => {
        expect(screen.getByTestId(alertTestId)).toHaveTextContent(
            "Contato cadastrado com sucesso!"
        );
    });

    test("should be able to have an 'strong' tag in the children prop", () => {
        expect(screen.getByText("cadastrado").tagName).toBe("STRONG");
    });
});
