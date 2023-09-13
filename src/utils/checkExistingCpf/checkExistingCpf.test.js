import { describe, expect, test } from "vitest";
import checkExistingCpf from "./checkExistingCpf";

describe("checkExistingCpf", () => {
    test("need to return undefined if the contact provide is undefined", () =>{
        expect(checkExistingCpf(undefined, "1")).toBe(undefined);
    })
    test("need to return undefined if the contact id matches the provided id", () =>{
        expect(checkExistingCpf({cpf: '123', id: "1"}, "1")).toBe(undefined);
    })
    test("need to return the contact object if the contact id does not match the provided id", () =>{
        expect(checkExistingCpf({cpf: '123', id: "3"}, "1")).toStrictEqual({cpf: '123', id: "3"});
    })
})