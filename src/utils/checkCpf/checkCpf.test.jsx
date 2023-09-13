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
    test("need to return the contact object if the cpf exist", () => {
        const contacts = [
            { id: "1", cpf: "123" },
            { id: "2", cpf: "456" },
        ];
        expect(checkCpf("456", false, contacts)).toStrictEqual({
            id: "2",
            cpf: "456",
        });
    });
    test("need to return undefined if the id provided matches the contact id", () => {
        const contacts = [
            { id: "1", cpf: "123" },
            { id: "2", cpf: "456" },
        ];
        expect(checkCpf("456", "2", contacts)).toBe(undefined);
    });
    test("need to return the contact object if the id provided does not match the contact id", () => {
        const contacts = [
            { id: "1", cpf: "123" },
            { id: "2", cpf: "456" },
        ];
        expect(checkCpf("456", "1", contacts)).toStrictEqual({
            id: "2",
            cpf: "456",
        });
    });
});
