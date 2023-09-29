import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { basicComponentsTest } from "../../basicTests/basicComponentsTest";
import CardInfoDate from "./CardInfoDate";

const infoDateTestId = "infoDateTestId";

const infoDateTestIdProp = "infoDateTestIdProp";

describe("CardInfoDate", () => {
    beforeEach(() => {
        render(<CardInfoDate />);
    });

    basicComponentsTest(infoDateTestId);

    test("Need to render a diferent text when the contact prop exist", () => {
        const { getByTestId } = render(
            <CardInfoDate
                contact={{ age: "23", name: "Fabi", date: "27/05" }}
            />
        );
        expect(getByTestId(infoDateTestIdProp)).toHaveTextContent(
            "Fabi faz 23 anos no dia 27/05"
        );
    });

    test("The values of the props need to be in a strong tag", () => {
        const { queryAllByText } = render(
            <CardInfoDate
                contact={{ age: "23", name: "Fabi", date: "27/05" }}
            />
        );
        expect(
            queryAllByText(/(\d+|Fabi)/).every((e) => e.tagName === "STRONG")
        ).toBe(true);
    });
});
