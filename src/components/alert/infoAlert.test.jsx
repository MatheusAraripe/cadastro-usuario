import "@testing-library/jest-dom";
import { beforeEach, describe, expect, test } from "vitest";
import InfoAlert from "./InfoAlert";
import { render, screen } from "@testing-library/react";

const alertTestId = "infoAlertTest";

describe("InfoAlert", () => {
    beforeEach(() => {
        render(<InfoAlert mesage={"mensagem de erro"} type={"error"} />);
    });
    test("should render the info alert", () => {
        expect(screen.getByTestId(alertTestId)).toBeInTheDocument();
    });
    test("should be able to render based on the children prop", () => {
        expect(screen.getByTestId(alertTestId)).toHaveTextContent(
            "mensagem de erro"
        );
    });
});
