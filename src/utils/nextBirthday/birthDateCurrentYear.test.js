import { describe, expect, test } from "vitest";
import birthDateCurrentYear from "./birthDateCurrentYear";

describe("birthDateCurrentYear",()=>{
    test("Need to return an date object with the birthday this year", ()=>{
        const date = birthDateCurrentYear(new Date(), new Date("05/22/2000"))
        expect(date).toStrictEqual(new Date("05/22/2023"))
    })
})