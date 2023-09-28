import "@testing-library/jest-dom";
import { beforeEach, describe } from "vitest";
import InfoAlert from "./InfoAlert";
import { render } from "@testing-library/react";
import { basicComponentsTest } from "../../basicTests/basicComponentsTest";

const alertTestId = "infoAlertTest";

describe("InfoAlert", () => {
    beforeEach(() => {
        render(<InfoAlert mesage={"mensagem de erro"} type={"error"} />);
    });
    basicComponentsTest(alertTestId, "mensagem de erro");
});
