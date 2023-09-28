import "@testing-library/jest-dom";
import { getByText, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import SuccessAlert from "./SuccessAlert";
import { basicComponentsTest } from "../../basicTests/basicComponentsTest";

const alertTestId = "alert";

describe("SuccessAlert", () => {
    beforeEach(() => {
        render(<SuccessAlert message={"cadastrado"} />);
    });
    basicComponentsTest(alertTestId, "Contato cadastrado com sucesso!");

    test("should be able to have an 'strong' tag in the children prop", () => {
        expect(screen.getByText("cadastrado").tagName).toBe("STRONG");
    });
});
