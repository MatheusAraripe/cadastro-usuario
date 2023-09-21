import { describe, expect, test } from "vitest";
import nextBirthday from "./nextBirthday";

describe("nextBirthday", () =>{
    test("need to return null if the contacts arry is empty", () => {
        expect(nextBirthday([])).toBe(null);
    })
    // test("need to return the near birthday in the arry", () =>{
    //     const contacts = [{name: 'matheus', date: ''}]
    // })
})