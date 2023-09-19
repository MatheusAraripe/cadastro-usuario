import { describe, expect, test } from "vitest";
import calculateNearContact from "./calculateNearContact";

describe("calculateNearContact",()=>{
    test("need to resturn an object if the contact date is near than the default values", ()=>{

        const today = new Date()

        const calculated = calculateNearContact(new Date("10/25/2023"), Infinity, null, {date: '10/25/2000'}, today)
        const nearDay = Math.abs(new Date("10/25/2023") - new Date());
        expect(calculated).toStrictEqual({nearDay, nearContact: {date: '10/25/2000'}})
    })
})