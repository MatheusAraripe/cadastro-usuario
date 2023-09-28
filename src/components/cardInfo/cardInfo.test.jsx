import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { beforeEach, describe } from "vitest";
import CardInfo from "./CardInfo";
import { basicComponentsTest } from "../../basicTests/basicComponentsTest";

const cardInfoTestId = "cardInfoTestId";

describe("CardInfo", () => {
    beforeEach(() => {
        render(<CardInfo info={"mensagem de teste"} />);
    });
    basicComponentsTest(cardInfoTestId, "mensagem de teste");
});
