import { describe, expect, test } from "vitest";
import checkCpf from "./checkCpf";

describe("checkCpf", () => {
    test("need to return 'undefined' for an cpf that don't exist", () => {
        const contacts = [
            { id: "1", cpf: "123" },
            { id: "2", cpf: "456" },
        ];
        expect(checkCpf("789", false, contacts)).toBe(undefined);
    });
});
