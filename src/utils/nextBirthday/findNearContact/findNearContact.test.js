import { describe, expect, test } from "vitest";
import findNearContact from "./findNearContact";

describe("findNearContact", ()=>{
    test("Need to set the values of the variables based on the birth dates of each contact", ()=>{
        const contacts = [{date: "10/11/2000"}, {date: "20/11/2000"}];
        const today = new Date();
        let nearContact = null;
        let nearDay = Infinity;
        
        const nearObject = findNearContact(contacts, today);

        nearDay = nearObject.nearDay
        nearContact = nearObject.nearContact

        const obj = {
            contact: nearContact,
            day: nearDay
        }

        expect(obj).toStrictEqual({contact: {date: "10/11/2000"}, day: Math.abs(new Date("11/10/2023") - today)})
    })
})